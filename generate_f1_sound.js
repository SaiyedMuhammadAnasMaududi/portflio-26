const fs = require('fs');
const path = require('path');

function generateLoudF1EngineWav(filePath) {
  const sampleRate = 44100;
  const duration = 2.5; // 2.5 seconds
  const numSamples = Math.floor(sampleRate * duration);
  const dataBuffer = Buffer.alloc(numSamples * 2); // 16-bit mono

  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;

    // F1 Engine pitch curve (Idle -> High Rev -> Up Shift)
    let freq;
    if (t < 1.4) {
      freq = 200 + Math.pow(t / 1.4, 1.8) * 750; // Rev up from 200Hz to 950Hz
    } else if (t < 1.6) {
      freq = 950 - ((t - 1.4) / 0.2) * 300; // Quick shift drop
    } else {
      freq = 650 + Math.pow((t - 1.6) / 0.9, 1.5) * 400; // Second rev boost
    }

    const phase = 2 * Math.PI * freq * t;
    
    // Rich V10 Engine Harmonics + Aggressive Overdrive
    let sample = 0.6 * Math.sin(phase) +
                 0.35 * Math.sin(phase * 2) +
                 0.2 * Math.sin(phase * 3) +
                 0.1 * Math.sin(phase * 4) +
                 0.08 * (Math.random() * 2 - 1); // Exhaust rumble

    // Hard clip / Distortion saturation for engine roar
    sample = Math.max(-0.95, Math.min(0.95, sample * 1.6));

    // Envelope
    let env = 1.0;
    if (t < 0.05) env = t / 0.05;
    else if (t > 2.0) env = 1.0 - (t - 2.0) / 0.5;

    const intSample = Math.floor(sample * env * 32000);
    dataBuffer.writeInt16LE(intSample, i * 2);
  }

  // Create WAV Header
  const header = Buffer.alloc(44);
  header.write('RIFF', 0);
  header.writeUInt32LE(36 + dataBuffer.length, 4);
  header.write('WAVE', 8);
  header.write('fmt ', 12);
  header.writeUInt32LE(16, 16);
  header.writeUInt16LE(1, 20); // PCM
  header.writeUInt16LE(1, 22); // Mono
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(sampleRate * 2, 28);
  header.writeUInt16LE(2, 32);
  header.writeUInt16LE(16, 34);
  header.write('data', 36);
  header.writeUInt32LE(dataBuffer.length, 40);

  const finalBuffer = Buffer.concat([header, dataBuffer]);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, finalBuffer);
  console.log(`Loud F1 Engine WAV generated at ${filePath}`);
}

generateLoudF1EngineWav(path.join(__dirname, 'public', 'audio', 'f1.wav'));
