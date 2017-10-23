
declare namespace Tone {

    /**
     * Base class for sources. Sources have start/stop methods and the ability to be synced to the start/stop of Tone.Transport.
     * 
     * @class Source
     * @extends {AudioNode}
     */
    class Source extends AudioNode {
        constructor();

        /**
         * The fadeIn time of the amplitude envelope.
         * 
         * @type {Time}
         * @memberof Source
         */
        fadeIn: Time;

        /**
         * The fadeOut time of the amplitude envelope.
         * 
         * @type {Time}
         * @memberof Source
         */
        fadeOut: Time;

        /**
         * Mute the output.
         * 
         * @type {boolean}
         * @memberof Source
         */
        mute: boolean;

        /**
         * Returns the playback state of the source, either “started” or “stopped”.
         * 
         * @type {State}
         * @memberof Source
         */
        readonly state: State;

        /**
         * The volume of the output in decibels.
         * 
         * @type {Signal<Decibels>}
         * @memberof Source
         */
        volume: Signal<Decibels>;

        /**
         * Start the source at the specified time. If no time is given, start the source now.
         * 
         * @param {Time} [time] 
         * @returns {this} 
         * @memberof Source
         */
        start(time?: Time): this;

        /**
         * Stop the source at the specified time. If no time is given, stop the source now.
         * 
         * @param {Time} [time] 
         * @returns {this} 
         * @memberof Source
         */
        stop(time?: Time): this;

        /**
         * Sync the source to the Transport so that all subsequent calls to start and stop are synced to the TransportTime instead of the AudioContext time.
         * 
         * @returns {this} 
         * @memberof Source
         */
        sync(): this;

        /**
         * Unsync the source to the Transport. See Tone.Source.sync
         * 
         * @returns {this} 
         * @memberof Source
         */
        unsync(): this;
    }

    namespace Source {
        interface Options {
            /**
             * The fadeIn time of the amplitude envelope.
             */
            fadeIn: Time;

            /**
             * The fadeOut time of the amplitude envelope.
             */
            fadeOut: Time;

            /**
             * Mute the output.
             */
            mute: boolean;

            /**
             * The volume of the output in decibels.
             */
            volume: Decibels;
        }
    }

    /**
     * Tone.Oscillator supports a number of features including phase rotation, multiple oscillator types (see Tone.Oscillator.type), and Transport syncing (see Tone.Oscillator.syncFrequency).
     * 
     * @class Oscillator
     * @extends {Source}
     */
    class Oscillator extends Source {
        constructor(frequency?: Frequency | number, type?: OscillatorType);
        constructor(options: Partial<Oscillator.Options>);

        /**
         * The detune control signal.
         */
        detune: Signal<Cents>;

        /**
         * The frequency control.
         * 
         * @type {Signal<Frequency>}
         * @memberof Oscillator
         */
        frequency: Signal<Frequency | number>;

        /**
         * The partials of the waveform. A partial represents the amplitude at a harmonic. The first harmonic is the fundamental frequency, the second is the octave and so on following the harmonic series. Setting this value will automatically set the type to “custom”. The value is an empty array when the type is not “custom”.
         * 
         * @type {number[]}
         * @memberof Oscillator
         */
        partials: number[];

        /**
         * The phase of the oscillator in degrees.
         * 
         * @type {Degrees}
         * @memberof Oscillator
         */
        phase: Degrees;

        /**
         * The type of the oscillator: either sine, square, triangle, or sawtooth. Also capable of setting the first x number of partials of the oscillator. For example: “sine4” would set be the first 4 partials of the sine wave and “triangle8” would set the first 8 partials of the triangle wave.
         * 
         * Uses PeriodicWave internally even for native types so that it can set the phase. PeriodicWave equations are from the Webkit Web Audio implementation.
         * 
         * @type {Oscillator.Type}
         * @memberof Oscillator
         */
        type: Oscillator.Type;
        syncFrequency(): this;
        unsyncFrequency(): this;
    }

    namespace Oscillator {
        type Type = 'sine' | 'square' | 'triangle' | 'sawtooth' | 'pulse' | string;
        interface Options extends Source.Options {
            /**
             * The detune control signal.
             */
            detune: Cents;

            /**
             * The frequency control.
             * 
             * @type {Signal<Frequency>}
             * @memberof Oscillator
             */
            frequency: Frequency | number | string;

            /**
             * The partials of the waveform. A partial represents the amplitude at a harmonic. The first harmonic is the fundamental frequency, the second is the octave and so on following the harmonic series. Setting this value will automatically set the type to “custom”. The value is an empty array when the type is not “custom”.
             * 
             * @type {number[]}
             * @memberof Oscillator
             */
            partials: number[];

            /**
             * The phase of the oscillator in degrees.
             * 
             * @type {Degrees}
             * @memberof Oscillator
             */
            phase: Degrees;

            /**
             * The type of the oscillator: either sine, square, triangle, or sawtooth. Also capable of setting the first x number of partials of the oscillator. For example: “sine4” would set be the first 4 partials of the sine wave and “triangle8” would set the first 8 partials of the triangle wave.
             * 
             * Uses PeriodicWave internally even for native types so that it can set the phase. PeriodicWave equations are from the Webkit Web Audio implementation.
             * 
             * @type {Oscillator.Type}
             * @memberof Oscillator
             */
            type: Oscillator.Type;

        }
    }

    /**
     * Tone.Noise is a noise generator. It uses looped noise buffers to save on performance. Tone.Noise supports the noise types: “pink”, “white”, and “brown”. Read more about colors of noise on Wikipedia.
     * 
     * @class Noise
     * @extends {Source}
     */
    class Noise extends Source {
        constructor(type: Noise.Type);
        constructor(options: Partial<Noise.Options>);

        /**
         * The playback rate of the noise. Affects the “frequency” of the noise.
         * 
         * @type {Signal<Positive>}
         * @memberof Noise
         */
        _playbackRate: Signal<Positive>;

        /**
         * The type of the noise. Can be “white”, “brown”, or “pink”.
         * 
         * @type {string}
         * @memberof Noise
         */
        type: Noise.Type;
    }

    namespace Noise {
        type Type = 'white' | 'brown' | 'pink';
        interface Options extends Source.Options {
            /**
             * The type of the noise. Can be “white”, “brown”, or “pink”.
             * 
             * @type {string}
             * @memberof Noise
             */
            type: Noise.Type;

            /**
             * The playback rate of the noise. Affects the “frequency” of the noise.
             * 
             * @type {Signal<Positive>}
             * @memberof Noise
             */
            playbackRate: Positive;
        }
    }

    /**
     * Tone.OmniOscillator aggregates Tone.Oscillator, Tone.PulseOscillator, Tone.PWMOscillator, Tone.FMOscillator, Tone.AMOscillator, and Tone.FatOscillator into one class. The oscillator class can be changed by setting the type. omniOsc.type = "pwm" will set it to the Tone.PWMOscillator. Prefixing any of the basic types (“sine”, “square4”, etc.) with “fm”, “am”, or “fat” will use the FMOscillator, AMOscillator or FatOscillator respectively. For example: omniOsc.type = "fatsawtooth" will create set the oscillator to a FatOscillator of type “sawtooth”.
     * 
     * @class OmniOscillator
     * @extends {Tone.Source}
     */
    class OmniOscillator extends Source {
        constructor(frequency?: Frequency, type?: string);

        /**
         * The number of detuned oscillators
         * 
         * @type {number}
         * @memberof OmniOscillator
         */
        count: number;

        /**
         * The detune control
         * 
         * @type {Signal<Cents>}
         * @memberof OmniOscillator
         */
        detune: Signal<Cents>;

        /**
         * The frequency control.
         * 
         * @type {Signal<Frequency>}
         * @memberof OmniOscillator
         */
        frequency: Signal<Frequency>;

        /**
         * Harmonicity is the frequency ratio between the carrier and the modulator oscillators. A harmonicity of 1 gives both oscillators the same frequency. Harmonicity = 2 means a change of an octave. See Tone.AMOscillator or Tone.FMOscillator for more info.
         * 
         * @type {Signal<Positive>}
         * @memberof OmniOscillator
         */
        harmonicity: Signal<Positive>;

        /**
         * The modulationFrequency Signal of the oscillator (only if the oscillator type is set to pwm). See Tone.PWMOscillator for more info.
         * 
         * @type {Signal<Frequency>}
         * @memberof OmniOscillator
         */
        modulationFrequency: Signal<Frequency>;

        /**
         * The type of the modulator oscillator. Only if the oscillator is set to “am” or “fm” types. see. Tone.AMOscillator or Tone.FMOscillator for more info.
         * 
         * @type {('am' | 'fm')}
         * @memberof OmniOscillator
         */
        modulationType: 'am' | 'fm';

        /**
         * The partials of the waveform. A partial represents the amplitude at a harmonic. The first harmonic is the fundamental frequency, the second is the octave and so on following the harmonic series. Setting this value will automatically set the type to “custom”. The value is an empty array when the type is not “custom”. This is not available on “pwm” and “pulse” oscillator types.
         * 
         * @type {number[]}
         * @memberof OmniOscillator
         */
        partials: number[];

        /**
         * The phase of the oscillator in degrees.
         * 
         * @type {Degrees}
         * @memberof OmniOscillator
         */
        phase: Degrees;

        /**
         * The detune spread between the oscillators. If “count” is set to 3 oscillators and the “spread” is set to 40, the three oscillators would be detuned like this: [-20, 0, 20] for a total detune spread of 40 cents. See Tone.FatOscillator for more info.
         * 
         * @type {Cents}
         * @memberof OmniOscillator
         */
        spread: Cents;

        /**
         * The type of the oscillator. Can be any of the basic types: sine, square, triangle, sawtooth. Or prefix the basic types with “fm”, “am”, or “fat” to use the FMOscillator, AMOscillator or FatOscillator types. The oscillator could also be set to “pwm” or “pulse”. All of the parameters of the oscillator’s class are accessible when the oscillator is set to that type, but throws an error when it’s not.
         * 
         * @type {('fm' | 'am' | 'fat')}
         * @memberof OmniOscillator
         */
        type: 'fm' | 'am' | 'fat';

        /**
         * The width of the oscillator (only if the oscillator is set to “pulse”)
         * 
         * @type {Signal<NormalRange>}
         * @memberof OmniOscillator
         */
        width: Signal<NormalRange>;
    }

    /**
     * Tone.Player is an audio file player with start, loop, and stop functions.
     * 
     * @class Player
     * @extends {Source}
     */
    class Player extends Source {
        constructor(url: string | AudioBuffer | Partial<Player.Options>, onload?: (e: any)=>any);

        /**
         * If the file should play as soon as the buffer is loaded.
         * 
         * @type {boolean}
         * @memberof Player
         */
        autostart: boolean;

        /**
         * The audio buffer belonging to the player.
         * 
         * @type {Buffer}
         * @memberof Player
         */
        buffer: Buffer;

        /**
         * If all the buffer is loaded
         * 
         * @type {boolean}
         * @memberof Player
         */
        readonly loaded: boolean;

        /**
         * If the buffer should loop once it’s over.
         * 
         * @type {boolean}
         * @memberof Player
         */
        loop: boolean;

        /**
         * If loop is true, the loop will end at this position.
         * 
         * @type {Time}
         * @memberof Player
         */
        loopEnd: Time;

        /**
         * If loop is true, the loop will start at this position.
         * 
         * @type {Time}
         * @memberof Player
         */
        loopStart: Time;

        /**
         * The playback speed. 1 is normal speed. This is not a signal because Safari and iOS currently don’t support playbackRate as a signal.
         * 
         * @type {number}
         * @memberof Player
         */
        playbackRate: number;

        /**
         * Enabling retrigger will allow a player to be restarted before the the previous ‘start’ is done playing. Otherwise, successive calls to Tone.Player.start will only start the sample if it had played all the way through.
         * 
         * @type {boolean}
         * @memberof Player
         */
        retrigger: boolean;

        /**
         * Load the audio file as an audio buffer. Decodes the audio asynchronously and invokes the callback once the audio buffer loads. Note: this does not need to be called if a url was passed in to the constructor. Only use this if you want to manually load a new url.
         * 
         * @param {string} url 
         * @param {(e: any)=>any} [callback] 
         * @returns {Promise<Player>} 
         * @memberof Player
         */
        load(url:string, callback?:(e: any)=>any):  Promise<Player>;

        /**
         * Seek to a specific time in the player’s buffer. If the source is no longer playing at that time, it will stop. If you seek to a time that
         * 
         * @param {Time} offset 
         * @param {Time} [time] 
         * @returns {this} 
         * @memberof Player
         */
        seek(offset: Time, time?: Time): this;

        /**
         * Set the loop start and end. Will only loop if loop is set to true.
         * 
         * @param {Tone.Time} loopStart 
         * @param {Tone.Time} loopEnd 
         * @returns {this} 
         * @memberof Player
         */
        setLoopPoints(loopStart:Tone.Time, loopEnd:Tone.Time): this;
    }

    namespace Player {
        interface Options extends Source.Options {

            url: string;

            /**
             * If the file should play as soon as the buffer is loaded.
             * 
             * @type {boolean}
             */
            autostart: boolean;

            /**
             * The audio buffer belonging to the player.
             * 
             * @type {Buffer}
             */
            buffer: Buffer;

            /**
             * If all the buffer is loaded
             * 
             * @type {boolean}
             */
            readonly loaded: boolean;

            /**
             * If the buffer should loop once it’s over.
             * 
             * @type {boolean}
             */
            loop: boolean;

            /**
             * If loop is true, the loop will end at this position.
             * 
             * @type {Time}
             */
            loopEnd: Time;

            /**
             * If loop is true, the loop will start at this position.
             * 
             * @type {Time}
             */
            loopStart: Time;

            /**
             * The playback speed. 1 is normal speed. This is not a signal because Safari and iOS currently don’t support playbackRate as a signal.
             * 
             * @type {number}
             */
            playbackRate: number;

            /**
             * Enabling retrigger will allow a player to be restarted before the the previous ‘start’ is done playing. Otherwise, successive calls to Tone.Player.start will only start the sample if it had played all the way through.
             * 
             * @type {boolean}
             */
            retrigger: boolean;
        }
    }

    /**
     * Tone.PulseOscillator is a pulse oscillator with control over pulse width, also known as the duty cycle. At 50% duty cycle (width = 0.5) the wave is a square and only odd-numbered harmonics are present. At all other widths even-numbered harmonics are present. Read more here.
     * 
     * @class PulseOscillator
     * @extends {Oscillator}
     */
    class PulseOscillator extends Oscillator {
        constructor(frequency?: number, width?: NormalRange);

        /**
         * The width of the pulse.
         * 
         * @type {Signal<NormalRange>}
         * @memberof PulseOscillator
         */
        width: Signal<NormalRange>;
    }

    /**
     * Tone.PWMOscillator modulates the width of a Tone.PulseOscillator at the modulationFrequency. This has the effect of continuously changing the timbre of the oscillator by altering the harmonics generated.
     * 
     * @class PWMOscillator
     * @extends {Oscillator}
     */
    class PWMOscillator extends Oscillator {
        constructor(frequency: Frequency, modulationFrequency: Frequency);
    }

    /**
     * Tone.UserMedia uses MediaDevices.getUserMedia to open up and external microphone or audio input. Check MediaDevices API Support to see which browsers are supported. Access to an external input is limited to secure (HTTPS) connections.
     * 
     * @class UserMedia
     * @extends {AudioNode}
     */
    class UserMedia extends AudioNode {
        constructor(volume?: Decibels);
        constructor(options: UserMedia.Options);

        /**
         * Mute the output.
         * 
         * @type {boolean}
         * @memberof UserMedia
         */
        mute: boolean;

        /**
         * The volume of the output in decibels.
         * 
         * @type {Signal<Decibels>}
         * @memberof UserMedia
         */
        volume: Signal<Decibels>;

        /**
         * Returns an identifier for the represented device that is persisted across sessions. It is un-guessable by other applications and unique to the origin of the calling application. It is reset when the user clears cookies (for Private Browsing, a different identifier is used that is not persisted across sessions). Returns undefined when the device is not open.
         * 
         * @type {string}
         * @memberof UserMedia
         */
        readonly deviceId: string;

        /**
         * Returns a group identifier. Two devices have the same group identifier if they belong to the same physical device. Returns undefined when the device is not open.
         * 
         * @type {string}
         * @memberof UserMedia
         */
        readonly groupId: string;

        /**
         * Returns a label describing this device (for example “Built-in Microphone”). Returns undefined when the device is not open or label is not available because of permissions.
         * 
         * @type {string}
         * @memberof UserMedia
         */
        readonly label: string;

        /**
         * Returns the playback state of the source, “started” when the microphone is open and “stopped” when the mic is closed.
         * 
         * @type {UserMedia.State}
         * @memberof UserMedia
         */
        readonly state: UserMedia.State;

        /**
         * If getUserMedia is supported by the browser.
         * 
         * @type {boolean}
         * @memberof UserMedia
         */
        readonly supported: boolean;

        /**
         * Close the media stream
         * 
         * @returns {this} 
         * @memberof UserMedia
         */
        close(): this;

        /**
         * Open the media stream. If a string is passed in, it is assumed to be the label or id of the stream, if a number is passed in, it is the input number of the stream.
         * 
         * @param {(string | number)} [labelOrId] 
         * @returns {Promise<this>} 
         * @memberof UserMedia
         */
        open(labelOrId?: string | number): Promise<this>;
    }

    namespace UserMedia {
        type State = 'stated' | 'stopped';
        interface Options {
            /**
             * Mute the output.
             * 
             * @type {boolean}
             * @memberof UserMedia
             */
            mute: boolean;

            /**
             * The volume of the output in decibels.
             * 
             * @type {Signal<Decibels>}
             * @memberof UserMedia
             */
            volume: Signal<Decibels>;
        }
    }

}
