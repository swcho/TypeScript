
declare namespace Tone {

    class Volume extends AudioNode {
        mute: boolean;
        volumn: Signal<Decibels>;
    }

    /**
     * LFO stands for low frequency oscillator. Tone.LFO produces an output signal which can be attached to an AudioParam or Tone.Signal in order to modulate that parameter with an oscillator. The LFO can also be synced to the transport to start/stop and change when the tempo changes.
     * 
     * @class LFO
     * @extends {Oscillator}
     */
    class LFO extends Oscillator {
        constructor(frequency?: Tone.Time, min?: number, max?: number);
        constructor(optioins: Partial<LFO.Options>);
    }

    namespace LFO {
        interface Options extends Oscillator.Options {
            min: number;
            max: number;
            amplitude: number;
        }
    }

    /**
     * Tone.Envelope is an ADSR envelope generator. Tone.Envelope outputs a signal which can be connected to an AudioParam or Tone.Signal.
     * 
     * @class Envelope
     * @extends {AudioNode}
     */
    class Envelope extends AudioNode {
        constructor(attack: Time, decay?: Time, sustain?: NormalRange, release?: Time);

        /**
         * When triggerAttack is called, the attack time is the amount of time it takes for the envelope to reach it’s maximum value.
         * 
         * @type {Time}
         * @memberof Envelope
         */
        attack: Time;

        /**
         * The shape of the attack. Can be any of these strings: <ul> <li>linear</li> <li>exponential</li> <li>sine</li> <li>cosine</li> <li>bounce</li> <li>ripple</li> <li>step</li> </ul> Can also be an array which describes the curve. Values in the array are evenly subdivided and linearly interpolated over the duration of the attack.
         * 
         * @type {(string | number[])}
         * @memberof Envelope
         */
        attackCurve: string | number[];

        /**
         * After the attack portion of the envelope, the value will fall over the duration of the decay time to it’s sustain value.
         * 
         * @type {Time}
         * @memberof Envelope
         */
        decay: Time;

        /**
         * After triggerRelease is called, the envelope’s value will fall to it’s miminum value over the duration of the release time.
         * 
         * @type {Time}
         * @memberof Envelope
         */
        release: Time;

        /**
         * The shape of the release. See the attack curve types.
         * 
         * @type {(string | number[])}
         * @memberof Envelope
         */
        releaseCurve: string | number[];

        /**
         * The sustain value is the value which the envelope rests at after triggerAttack is called, but before triggerRelease is invoked.
         * 
         * @type {number}
         * @memberof Envelope
         */
        sustain: number;

        /**
         * Read the current value of the envelope. Useful for syncronizing visual output to the envelope.
         * 
         * @type {number}
         * @memberof Envelope
         */
        readonly value: number;

        /**
         * Cancels all scheduled envelope changes after the given time.
         * 
         * @param {Time} [after] 
         * @returns {this} 
         * @memberof Envelope
         */
        cancel(after?: Time): this;

        /**
         * Disconnect and dispose.
         * 
         * @returns {this} 
         * @memberof Envelope
         */
        dispose(): this;

        /**
         * Get the scheduled value at the given time. This will return the unconverted (raw) value.
         * 
         * @param {number} time 
         * @returns {number} 
         * @memberof Envelope
         */
        getValueAtTime(time: number): number;

        /**
         * Trigger the attack/decay portion of the ADSR envelope.
         * 
         * @param {Time} [time] 
         * @param {NormalRange} [velocity] 
         * @returns {this} 
         * @memberof Envelope
         */
        triggerAttack(time?: Time, velocity?: NormalRange): this;

        /**
         * triggerAttackRelease is shorthand for triggerAttack, then waiting some duration, then triggerRelease.
         * 
         * @param {Time} duration 
         * @param {Time} [time] 
         * @param {number} [velocity] 
         * @returns {this} 
         * @memberof Envelope
         */
        triggerAttackRelease(duration: Time, time?: Time, velocity?: number): this;

        /**
         * Triggers the release of the envelope.
         * 
         * @param {Time} [time] 
         * @returns {this} 
         * @memberof Envelope
         */
        triggerRelease(time?: Time): this;
    }

    namespace Envelope {
        interface Options {
            /**
             * When triggerAttack is called, the attack time is the amount of time it takes for the envelope to reach it’s maximum value.
             * 
             * @type {Time}
             * @memberof Envelope
             */
            attack: Time;

            /**
             * The shape of the attack. Can be any of these strings: <ul> <li>linear</li> <li>exponential</li> <li>sine</li> <li>cosine</li> <li>bounce</li> <li>ripple</li> <li>step</li> </ul> Can also be an array which describes the curve. Values in the array are evenly subdivided and linearly interpolated over the duration of the attack.
             * 
             * @type {(string | number[])}
             * @memberof Envelope
             */
            attackCurve: string | number[];

            /**
             * After the attack portion of the envelope, the value will fall over the duration of the decay time to it’s sustain value.
             * 
             * @type {Time}
             * @memberof Envelope
             */
            decay: Time;

            /**
             * After triggerRelease is called, the envelope’s value will fall to it’s miminum value over the duration of the release time.
             * 
             * @type {Time}
             * @memberof Envelope
             */
            release: Time;

            /**
             * The shape of the release. See the attack curve types.
             * 
             * @type {(string | number[])}
             * @memberof Envelope
             */
            releaseCurve: string | number[];

            /**
             * The sustain value is the value which the envelope rests at after triggerAttack is called, but before triggerRelease is invoked.
             * 
             * @type {number}
             * @memberof Envelope
             */
            sustain: number;
        }
    }

    /**
     * Tone.AmplitudeEnvelope is a Tone.Envelope connected to a gain node. Unlike Tone.Envelope, which outputs the envelope’s value, Tone.AmplitudeEnvelope accepts an audio signal as the input and will apply the envelope to the amplitude of the signal. Read more about ADSR Envelopes on Wikipedia.
     * 
     * @class AmplitudeEnvelope
     * @extends {Envelope}
     */
    class AmplitudeEnvelope extends Envelope {
        constructor(attack?: Time, decay?: Time, sustain?: NormalRange, release?: Time);
        constructor(options: Partial<AmplitudeEnvelope.Options>);
    }

    namespace AmplitudeEnvelope {
        interface Options extends Envelope.Options {

        }
    }

    /**
     * Tone.ScaledEnvelop is an envelope which can be scaled to any range. It’s useful for applying an envelope to a frequency or any other non-NormalRange signal parameter.
     * 
     * @class ScaledEnvelope
     * @extends {Envelope}
     */
    class ScaledEnvelope extends Envelope {
        constructor(attack?: any, decay?: Tone.Time, sustain?: number, release?:Tone.Time);
        constructor(options: ScaledEnvelope.Options);

        /**
         * The envelope’s exponent value.
         * 
         * @type {number}
         * @memberof ScaledEnvelope
         */
        exponent: number;

        /**
         * The envelope’s max output value. In other words, the value at the peak of the attack portion of the envelope.
         * 
         * @type {number}
         * @memberof ScaledEnvelope
         */
        max: number;

        /**
         * The envelope’s min output value. This is the value which it starts at.
         * 
         * @type {number}
         * @memberof ScaledEnvelope
         */
        min: number;
    }

    namespace ScaledEnvelope {
        interface Options extends Envelope.Options {

            /**
             * The envelope’s exponent value.
             * 
             * @type {number}
             * @memberof ScaledEnvelope
             */
            exponent: number;

            /**
             * The envelope’s max output value. In other words, the value at the peak of the attack portion of the envelope.
             * 
             * @type {number}
             * @memberof ScaledEnvelope
             */
            max: number;

            /**
             * The envelope’s min output value. This is the value which it starts at.
             * 
             * @type {number}
             * @memberof ScaledEnvelope
             */
            min: number;
            
        }
    }

    /**
     * Get the current waveform data of the connected audio source.
     * 
     * @class Waveform
     * @extends {AudioNode}
     */
    class Waveform extends AudioNode {
        constructor(size?: number);

        /**
         * The size of analysis. This must be a power of two in the range 32 to 32768.
         * 
         * @type {number}
         * @memberof Waveform
         */
        size: number;

        /**
         * Gets the waveform of the audio source. Returns the waveform data of length size as a Float32Array with values between -1 and 1.
         * 
         * @returns {Float32Array} 
         * @memberof Waveform
         */
        getValue(): Float32Array;
    }

    /**
     * Tone.Solo lets you isolate a specific audio stream. When an instance is set to solo=true, it will mute all other instances.
     * 
     * @class Solo
     * @extends {AudioNode}
     */
    class Solo extends AudioNode {
        constructor();
        readonly muted: boolean;

        /**
         * Isolates this instance and mutes all other instances of Tone.Solo. Only one instance can be soloed at a time. A soloed instance will report solo=false when another instance is soloed.
         * 
         * @type {boolean}
         * @memberof Solo
         */
        solo: boolean;
    }

    /**
     * Tone.PanVol is a Tone.Panner and Tone.Volume in one.
     * 
     * @class PanVol
     * @extends {AudioNode}
     */
    class PanVol extends AudioNode {
        constructor(pan?: number, volume?: number);

        /**
         * Mute/unmute the volume
         * 
         * @type {boolean}
         * @memberof PanVol
         */
        mute: boolean;

        /**
         * The L/R panning control.
         * 
         * @type {Signal<AudioRange>}
         * @memberof PanVol
         */
        pan: Signal<AudioRange>;

        /**
         * The volume control in decibels.
         * 
         * @type {Signal<Decibels>}
         * @memberof PanVol
         */
        volume: Signal<Decibels>;
    }

}