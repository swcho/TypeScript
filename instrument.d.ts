
declare namespace Tone {

    /**
     * Base-class for all instruments
     * 
     * @class Instrument
     */
    abstract class Instrument extends AudioNode {
        constructor();

        output: Volume;
        volume: Signal<Decibels>;

        /**
         * Trigger the attack portion of the note
         * 
         * @abstract
         * @param {(Frequency | Frequency[])} notes 
         * @param {Time} [time] 
         * @param {number} [velocity] 
         * @returns {this} 
         * @memberof Instrument
         */
        triggerAttack(notes: Frequency | Frequency[], time?: Time, velocity?: number): this;

        /**
         * Trigger the release of the note. Unlike monophonic instruments, a note (or array of notes) needs to be passed in as the first argument.
         * 
         * @abstract
         * @param {(Frequency | Frequency[])} notes 
         * @param {Time} [time] 
         * @param {number} [velocity] 
         * @returns {this} 
         * @memberof Instrument
         */
        triggerRelease(notes: Frequency | Frequency[], time?: Time, velocity?: number): this;

        /**
         * Trigger the attack and release after the specified duration
         * 
         * @param {Frequency} note 
         * @param {Time} duration 
         * @param {Time} [time] 
         * @param {NormalRange} [velocity] 
         * @returns {this} 
         * @memberof Instrument
         */
        triggerAttachRelease(note: Frequency, duration: Time, time?: Time, velocity?: NormalRange): this;

    }

    /**
     * This is an abstract base class for other monophonic instruments to extend. IMPORTANT: It does not make any sound on its own and shouldn’t be directly instantiated.
     * 
     * @class Monophonic
     * @extends {Instrument}
     */
    class Monophonic extends Instrument {
        constructor();

        /**
         * The glide time between notes.
         * 
         * @type {Time}
         * @memberof Monophonic
         */
        portamento: Time;

        /**
         * Get the audio context belonging to this instance.
         * 
         * @type {Context}
         * @memberof Monophonic
         */
        readonly context: Context;

        /**
         * Set the note at the given time. If no time is given, the note will set immediately.
         * 
         * @param {Frequency} note 
         * @param {Time} time 
         * @returns {this} 
         * @memberof Monophonic
         */
        setNote(note: Frequency, time: Time): this;

    }

    /**
     * Tone.MonoSynth is composed of one oscillator, one filter, and two envelopes. The amplitude of the Tone.Oscillator and the cutoff frequency of the Tone.Filter are controlled by Tone.Envelopes.
     * 
     * @class MonoSynth
     * @extends {Tone.Monophonic}
     */
    class MonoSynth extends Tone.Monophonic {
        constructor(options?: any);
        // TODO: define members/functions
    }

    /**
     * AMSynth uses the output of one Tone.Synth to modulate the amplitude of another Tone.Synth. The harmonicity (the ratio between the two signals) affects the timbre of the output signal greatly. Read more about Amplitude Modulation Synthesis on SoundOnSound.
     * 
     * @class AMSynth
     * @extends {Tone.Monophonic}
     */
    class AMSynth extends Tone.Monophonic {
        constructor(options?: any);
    }

    /**
     * FMSynth is composed of two Tone.Synths where one Tone.Synth modulates the frequency of a second Tone.Synth. A lot of spectral content can be explored using the modulationIndex parameter. Read more about frequency modulation synthesis on Sound On Sound: Part 1, Part 2.
     * 
     * @class FMSynth
     * @extends {Tone.Monophonic}
     */
    class FMSynth extends Tone.Monophonic {
        constructor(options?: any);

        detune: Signal;
    }

    /**
     * Tone.NoiseSynth is composed of a noise generator (Tone.Noise), one filter (Tone.Filter), and two envelopes (Tone.Envelop). One envelope controls the amplitude of the noise and the other is controls the cutoff frequency of the filter.
     * 
     * @class NoiseSynth
     * @extends {Tone.Instrument}
     */
    class NoiseSynth extends Tone.Instrument {
        constructor(options?: any);
        // TODO: define members/functions
    }

    /**
     * Karplus-String string synthesis. Often out of tune. Will change when the AudioWorkerNode is available across browsers.
     * 
     * @class PluckSynth
     * @extends {Tone.Instrument}
     */
    class PluckSynth extends Tone.Instrument {
        constructor(options?: any);
        // TODO: define members/functions
    }

    /**
     * Automatically interpolates between a set of pitched samples. Pass in an object which maps the note’s pitch or midi value to the url, then you can trigger the attack and release of that note like other instruments. By automatically repitching the samples, it is possible to play pitches which were not explicitly included which can save loading time. For sample or buffer playback where repitching is not necessary, use Tone.Player.
     * 
     * @class Sampler
     * @extends {Tone.Instrument}
     */
    class Sampler extends Tone.Instrument {
        constructor(smaples);
        // TODO: define members/functions
    }

    /**
     * Tone.PolySynth handles voice creation and allocation for any instruments passed in as the second paramter. PolySynth is not a synthesizer by itself, it merely manages voices of one of the other types of synths, allowing any of the monophonic synthesizers to be polyphonic.
     * 
     * @class PolySynth
     * @extends {Instrument}
     */
    class PolySynth extends Instrument {

        constructor(polyphony?: number | Object, voice?: Function);

        detune: Cents;

        /**
         * Get the synth’s attributes. Given no arguments get will return all available object properties and their corresponding values. Pass in a single attribute to retrieve or an array of attributes. The attribute strings can also include a “.” to access deeper properties.
         * 
         * @param {any[]} [params] 
         * @memberof PolySynth
         */
        get(params?: any[]): any;

        /**
         * Trigger the release portion of all the currently active voices.
         * 
         * @param {Time} time 
         * @returns {this} 
         * @memberof PolySynth
         */
        releaseAll(time: Time): this;

        /**
         * Set a member/attribute of the voices.
         * 
         * @param {(Object | string)} params 
         * @param {number} [value] 
         * @param {Time} [rampTime] 
         * @returns {this} 
         * @memberof PolySynth
         */
        set(params: Object | string, value?: number, rampTime?: Time): this;


    }

}