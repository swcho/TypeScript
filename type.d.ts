
declare namespace Tone {

    type Time = number | string;

    type Ticks = number;

    // https://tonejs.github.io/docs/r11/Type#bpm
    type BPM = number;

    // https://tonejs.github.io/docs/r11/Type#transporttime
    type TransportTime = string | number;

    // https://tonejs.github.io/docs/r11/Type#barsbeatssixteenths
    type BarsBeatsSixteenths = string;

    // https://tonejs.github.io/docs/r11/Type#normalrange
    type NormalRange = number;

    // https://tonejs.github.io/docs/r11/Type#seconds
    type Seconds = number;

    type State = 'started' | 'stopped' | 'paused';

    type EventId = number;

    type TimelinePosition = string;

    // https://tonejs.github.io/docs/r11/Type#cents
    type Cents = number;

    // https://tonejs.github.io/docs/r11/Type#decibels
    type Decibels = number

    // https://tonejs.github.io/docs/r11/Type#positive
    type Positive = number;

    // https://tonejs.github.io/docs/r11/Type#degrees
    type Degrees = number;

    // https://tonejs.github.io/docs/r11/Type#audiorange
    type AudioRange = number;

    /**
     * Tone.TimeBase is a flexible encoding of time which can be evaluated to and from a string. Parsing code modified from https://code.google.com/p/tapdigit/ Copyright 2011 2012 Ariya Hidayat, New BSD License
     * 
     * @class TimeBase
     */
    class TimeBase extends Tone {
        constructor( val: string | number, units?: string );
        /**
         * Add to the current value.
         * 
         * @param {Time} val 
         * @param {string} [units] 
         * @returns {TimeBase} 
         * @memberof TimeBase
         */
        add ( val: Time, units?: string ): this;

        /**
         * Return a clone of the TimeBase object.
         * 
         * @returns {TimeBase} 
         * @memberof TimeBase
         */
        clone(): TimeBase;

        /**
         * Copies the value of time to this Time
         * 
         * @param {TimeBase} time 
         * @memberof TimeBase
         */
        copy(time: TimeBase): TimeBase;

        /**
         * Divide the current value by the given time.
         * 
         * @param {Time} val 
         * @param {string} units 
         * @returns {this} 
         * @memberof TimeBase
         */
        div(val: Time, units?: string): this;

        /**
         * Multiply the current value by the given time.
         * 
         * @param {Time} val 
         * @param {string} units 
         * @returns {this} 
         * @memberof TimeBase
         */
        mult(val: Time, units?: string): this;

        /**
         * Repalce the current time value with the value given by the expression string.
         * 
         * @param {string} exprString 
         * @returns {this} 
         * @memberof TimeBase
         */
        set(exprString: string): this;

        /**
         * Subtract the value from the current time.
         * 
         * @param {Time} val 
         * @param {string} [units] 
         * @memberof TimeBase
         */
        sub(val: Time, units?: string): this;

        /**
         * Evaluate the time value. Returns the time in seconds.
         * 
         * @returns {Seconds} 
         * @memberof TimeBase
         */
        valueOf(): Seconds;
    }

    // var Note: {
    //     new(channel: any, time:Tone.Time, value: any): Tone.Note; //todo: channel: number|string, value: string|number|Object|Array
    // };

    // interface Note {
    //     value: any; //todo: string | number | Object
    //     parseScore(score: Object): Tone.Note[];
    //     route(channel:any, callback?: (e: any)=>any): void; //todo: string | number
    //     unroute(channel: any, callback?: (e: any)=>any): void; //todo: string | number;
    //     dispose(): Tone.Note;
    // }

    type Note = string;
    type MIDI = number;
    type Interval = number;

    /**
     * Tone.Frequency is a primitive type for encoding Frequency values. Eventually all time values are evaluated to hertz using the eval method.
     * 
     * @class Frequency
     * @extends {TimeBase}
     */
    class Frequency extends TimeBase {
        constructor( val: string | number, units?: string );

        /**
         * Convert a frequency value to a MIDI note.
         * 
         * @param {Frequency} frequency 
         * @returns {MIDI} 
         * @memberof Frequency
         */
        frequencyToMidi(frequency: Frequency): MIDI;

        /**
         * Takes an array of semitone intervals and returns an array of frequencies transposed by those intervals.
         * 
         * @param {string[]} intervals 
         * @returns {this} 
         * @memberof Frequency
         */
        harmonize(intervals: string[]): this;

        /**
         * Convert a MIDI note to frequency value.
         * 
         * @param {MIDI} midi 
         * @returns {Frequency} 
         * @memberof Frequency
         */
        midiToFrequency(midi: MIDI): Frequency;
        
        // /**
        //  * Return the value in Hertz
        //  * 
        //  * @returns {Frequency} 
        //  * @memberof Frequency
        //  */
        // toFrequency(): Frequency;

        /**
         * Return the value of the frequency as a MIDI note
         * 
         * @returns {MIDI} 
         * @memberof Frequency
         */
        toMidi(): MIDI;

        /**
         * Return the value of the frequency in Scientific Pitch Notation
         * 
         * @returns {Note} 
         * @memberof Frequency
         */
        toNote(): Note;

        /**
         * Return the duration of one cycle in seconds.
         * 
         * @returns {Seconds} 
         * @memberof Frequency
         */
        toSeconds(): Seconds;

        /**
         * Return the duration of one cycle in ticks
         * 
         * @returns {Ticks} 
         * @memberof Frequency
         */
        toTicks(): Ticks;

        /**
         * Transposes the frequency by the given number of semitones.
         * 
         * @param {Interval} interval 
         * @returns {this} 
         * @memberof Frequency
         */
        transpose(interval: Interval): this;
    }

    class Buffer extends Tone {
        constructor(url: any);
        static on(name: string, callback: Function);
    }

    interface Buffer extends Tone {
        MAX_SIMULTANEOUS_DOWNLOADS: number;
        readonly duration: number;
        readonly loaded: boolean;
        onload: (e: any)=>any;
        readonly url: string;
        load(url:string, callback?: (e: any)=>any): Tone.Buffer;
        onerror();
        onprogress();
        dispose(): Tone.Buffer;
        get(): AudioBuffer;
        set(buffer: any): Tone.Buffer; //TODO: change any to AudioBuffer | Tone.Buffer
    }

}