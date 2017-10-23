
interface ToneOptions {

}

declare class Tone implements ToneOptions {
    constructor(inputs?: number, outputs?: number);
    readonly context: Tone.Context;
    input: GainNode;
    chain(...nodes: any[]): Tone;
    connect(unit: any, outputNum?:number, inputNum?:number): this;
    connectSeries(...args: any[]): Tone;
    connectParallel(...args: any[]): Tone;
    dbToGain(db: number): number;
    defaultArg(given: any, fallback: any): any;
    disconnect(outputNum?:number): Tone;
    dispose(): Tone;
    equalPowerScale(percent:number): number;
    expScale(gain: number): number;
    extend(child: ()=>any, parent?: ()=>any): void;
    fan(...nodes: any[]): Tone;
    frequencyToNote(freq:number):string;
    frequencyToSeconds(freq:number):number;
    gainToDb(gain: number): number;
    get(params?:any): any;
    interpolate(input: number, outputMin: number, outputMax: number): number;
    isFrequency(freq: number): boolean;
    isFunction(arg: any): boolean;
    isUndef(arg: any): boolean;
    midiToNote(midiNumber: number): string;
    noGC(): Tone;
    normalize(input: number, inputMin: number, inputMax: number): number;
    notationToSeconds(notation: string, bpm?: number, timeSignature?: number): number;
    noteToFrequency(note: string): number;
    noteToMidi(note: string): number;
    now(): number;
    optionsObject(values: Array<any>, keys: Array<string>, defaults?:Object): Object;
    receive(channelName: string, input?: AudioNode): Tone;
    samplesToSeconds(samples: number): number;
    secondsToFrequency(seconds: number): number;
    send(channelName: string, amount?: number): Tone;
    set(params: any, value?: number, rampTime?: Tone.Time): Tone;
    setContext(ctx: AudioContext): void;
    setPreset(presetName: string): Tone;
    startMobile(): void;
    toFrequency(note: Tone.Frequency, now?: number): number;
    toMaster(): this;
    toSamples(time: Tone.Time): number;
    toSeconds(time?: number, now?: number): number;
    intervalToFrequencyRatio(interval: number): number;

    // own
    receive(channelName: string, channelNumber: number): this;
    send(channelName: string, amount: number): GainNode;
    toFrequency(freq: number): number;
    toSeconds(time: Tone.Time): number;
    toTicks(time: Tone.Time): number;

    // ??
    gainToDb(gain: any): number;
    dbToGain(db: any): number;
    isString(arg): boolean;
    connect(output: Tone.Output);
    toMaster(): this;
    intervalToFrequencyRatio(interval: number): number;
    default(values: any[], keys: any[], constr: Function | Object): Object;

    static Offline(callback: () => void, duration: Tone.Time): Promise<Tone.Buffer>;
    static connectSeries(nodes: AudioParam | Tone | AudioNode): Tone;
    static dbToGain(db: any): number;
    static defaultArg(given: any, fallback: any): any;
    static defaults(values: any[], keys: any[], constr: Function | Object): Object;
    static equalPowerScale(percent: any): any;
    static extend(child: Function, parent?: Function);
    static gainToDb(gain: any): any;
    static intervalToFrequencyRatio(interval: number): number;
    isArray
    isBoolean
    // isFunction
    isNote
    isNumber
    isObject
    static isString(arg): boolean;
    // isUndef
    loaded
    // static now(): number;
}

declare namespace Tone {

    class Emitter {
        /**
         * Clean up
         * 
         * @returns {this} 
         * @memberof Emitter
         */
        dispose(): this;

        /**
         * Invoke all of the callbacks bound to the event with any arguments passed in.
         * 
         * @param {string} event 
         * @param {...any[]} args 
         * @returns {this} 
         * @memberof Emitter
         */
        emit(event: string, ...args: any[]): this;

        /**
         * Remove the event listener.
         * 
         * @param {string} event 
         * @param {() => void} callback 
         * @returns {this} 
         * @memberof Emitter
         */
        off(event: string, callback: () => void): this;

        /**
         * Bind a callback to a specific event.
         * 
         * @param {string} event 
         * @param {() => void} callback 
         * @returns {this} 
         * @memberof Emitter
         */
        on(event: string, callback: () => void): this;

        /**
         * Add Emitter functions (on/off/emit) to the object
         * 
         * @param {(Object | Function)} object 
         * @returns {Emitter} 
         * @memberof Emitter
         */
        mixin(object: Object | Function): Emitter;
    }

    /**
     * Tone.AudioNode is the base class for classes which process audio. AudioNodes have inputs and outputs.
     * 
     * @class AudioNode
     * @extends {Tone}
     */
    class AudioNode extends Tone {
        constructor(context?: AudioContext);

        /**
         * Get the audio context belonging to this instance.
         * 
         * @type {Context}
         * @memberof AudioNode
         */
        readonly context: Context;

        /**
         * connect the output of a ToneNode to an AudioParam, AudioNode, or ToneNode
         * 
         */
        connect(unit: Tone | AudioParam | AudioNode, outputNum?: number, inputNum?: number): this;

        /**
         * disconnect the output
         * 
         * @param {(number | AudioNode)} output 
         * @returns {this} 
         * @memberof AudioNode
         */
        disconnect(output: number | AudioNode): this;

        /**
         * Dispose and disconnect
         * 
         * @returns {this} 
         * @memberof AudioNode
         */
        dispose(): this;

        /**
         * Connect ‘this’ to the master output. Shorthand for this.connect(Tone.Master)
         * 
         * @returns {this} 
         * @memberof AudioNode
         */
        toMaster(): this;
    }

    /**
     * Tone.Param wraps the native Web Audio’s AudioParam to provide additional unit conversion functionality. It also serves as a base-class for classes which have a single, automatable parameter.
     * 
     * @class Param
     * @extends {AudioNode}
     */
    class Param<T> extends AudioNode {
        constructor(param: AudioParam, units: Type, convert: boolean);

        /**
         * If the value should be converted or not
         * 
         * @type {boolean}
         * @memberof Param
         */
        convert: boolean;

        /**
         * The LFO created by the signal instance. If none was created, this is null.
         * 
         * @type {LFO}
         * @memberof Param
         */
        readonly lfo: LFO;

        /**
         * The units of the parameter
         * 
         * @type {Type}
         * @memberof Param
         */
        units: Type;

        /**
         * The current value of the parameter.
         * 
         * @type {number}
         * @memberof Param
         */
        value: T;

        /**
         * This is similar to cancelScheduledValues except it holds the automated value at cancelTime until the next automated event.
         * 
         * @param {Time} cancelTime 
         * @returns {this} 
         * @memberof Param
         */
        cancelAndHoldAtTime(cancelTime: Time): this;

        /**
         * Cancels all scheduled parameter changes with times greater than or equal to startTime.
         * 
         * @param {Time} startTime 
         * @returns {this} 
         * @memberof Param
         */
        cancelScheduledValues(startTime: Time): this;
        
        /**
         * Schedules an exponential continuous change in parameter value from the current time and current value to the given value over the duration of the rampTime.
         * 
         * @param {number} value 
         * @param {Time} rampTime 
         * @param {Time} [startTime] 
         * @returns {this} 
         * @memberof Param
         */
        exponentialRampTo(value: number, rampTime: Time, startTime?: Time): this;

        /**
         * Schedules an exponential continuous change in parameter value from the previous scheduled parameter value to the given value.
         * 
         * @param {number} value 
         * @param {Time} endTime 
         * @returns {this} 
         * @memberof Param
         */
        exponentialRampToValueAtTime(value: number, endTime: Time): this;

        /**
         * Convert between Time and time constant. The time constant returned can be used in setTargetAtTime.
         * 
         * @param {Time} time 
         * @returns {number} 
         * @memberof Param
         */
        getTimeConstant(time: Time): number;

        /**
         * Schedules an linear continuous change in parameter value from the current time and current value to the given value over the duration of the rampTime.
         * 
         * @param {number} value 
         * @param {Time} rampTime 
         * @param {Time} [startTime] 
         * @returns {this} 
         * @memberof Param
         */
        linearRampTo(value: number, rampTime: Time, startTime?: Time): this;

        /**
         * Schedules a linear continuous change in parameter value from the previous scheduled parameter value to the given value.
         * 
         * @param {number} value 
         * @param {Time} endTime 
         * @returns {this} 
         * @memberof Param
         */
        linearRampToValueAtTime(value: number, endTime: Time): this;

        /**
         * Ramps to the given value over the duration of the rampTime. Automatically selects the best ramp type (exponential or linear) depending on the units of the signal
         * 
         * @param {number} value 
         * @param {Time} rampTime 
         * @param {Time} [startTime] 
         * @returns {this} 
         * @memberof Param
         */
        rampTo(value: number, rampTime: Time, startTime?: Time): this;

        /**
         * Creates a schedule point with the current value at the current time. This is useful for creating an automation anchor point in order to schedule changes from the current value.
         * 
         * @param {number} [now] 
         * @returns {this} 
         * @memberof Param
         */
        setRampPoint(now?: number): this;

        /**
         * Start exponentially approaching the target value at the given time with a rate having the given time constant.
         * 
         * @param {number} value 
         * @param {Time} startTime 
         * @param {number} timeConstant 
         * @returns {this} 
         * @memberof Param
         */
        setTargetAtTime(value: number, startTime: Time, timeConstant: number): this;

        /**
         * Schedules a parameter value change at the given time.
         * 
         * @param {*} value 
         * @param {Time} time 
         * @returns {this} 
         * @memberof Param
         */
        setValueAtTime(value: any, time: Time): this;
        
        /**
         * Sets an array of arbitrary parameter values starting at the given time for the given duration.
         * 
         * @param {any[]} values 
         * @param {Time} startTime 
         * @param {Time} duration 
         * @memberof Param
         */
        setValueCurveAtTime(values: any[], startTime: Time, duration: Time): this;

        /**
         * Start exponentially approaching the target value at the given time. Since it is an exponential approach it will continue approaching after the ramp duration. The rampTime is the time that it takes to reach over 99% of the way towards the value.
         * 
         * @param {number} value 
         * @param {Time} rampTime 
         * @param {Time} [startTime] 
         * @returns {this} 
         * @memberof Param
         */
        targetRampTo(value: number, rampTime: Time, startTime?: Time): this;

    }
	/**
	 *  @class A thin wrapper around the Native Web Audio GainNode.
	 *         The GainNode is a basic building block of the Web Audio
	 *         API and is useful for routing audio and adjusting gains.
	 *  @extends {Tone}
	 *  @param  {Number=}  gain  The initial gain of the GainNode
	 *  @param {Tone.Type=} units The units of the gain parameter.
	 */
    class Gain extends AudioNode  {

        constructor(gain?: number, units?: Type);

        gain: Param<number>;

    }

    /**
     * Transport for timing musical events. Supports tempo curves and time changes.
     * Unlike browser-based timing (setInterval, requestAnimationFrame) Tone.
     * Transport timing events pass in the exact time of the scheduled event in the argument of the callback function.
     * Pass that time value to the object you’re scheduling.
     * 
     * A single transport is created for you when the library is initialized.
     * 
     * The transport emits the events: “start”, “stop”, “pause”, and “loop” which are called with the time of that event as the argument.
     * 
     * {
     *  bpm  : 120 ,
     *  swing  : 0 ,
     *  swingSubdivision  : 8n ,
     *  timeSignature  : 4 ,
     *  loopStart  : 0 ,
     *  loopEnd  : 4m ,
     *  PPQ  : 192
     * }
     */
    interface ITransport extends Emitter {
        /**
         * Pulses Per Quarter note. This is the smallest resolution the Transport timing supports.
         * This should be set once on initialization and not set again.
         * Changing this value after other objects have been created can cause problems.
         * 
         * @type {number}
         * @memberof Transport
         */
        PPQ: number;

        /**
         * The Beats Per Minute of the Transport.
         * 
         * @memberof Transport
         */
        bpm: TickSignal;

        /**
         * If the transport loops or not.
         * 
         * @type {boolean}
         * @memberof Transport
         */
        loop: boolean;

        /**
         * When the Tone.Transport.loop = true, this is the ending position of the loop.
         * 
         * @type {TransportTime}
         * @memberof Transport
         */
        loopEnd: TransportTime;

        /**
         * When the Tone.Transport.loop = true, this is the starting position of the loop.
         * 
         * @type {TransportTime}
         * @memberof Transport
         */
        loopStart: TransportTime;

        /**
         * The Transport’s position in Bars:Beats:Sixteenths. Setting the value will jump to that position right away.
         * 
         * @type {BarsBeatsSixteenths}
         * @memberof Transport
         */
        position: BarsBeatsSixteenths;

        /**
         * The Transport’s loop position as a normalized value. Always returns 0 if the transport if loop is not true.
         * 
         * @type {NormalRange}
         * @memberof Transport
         */
        progress: NormalRange;

        /**
         * The Transport’s position in seconds Setting the value will jump to that position right away.
         * 
         * @type {Seconds}
         * @memberof Transport
         */
        seconds: Seconds;

        /**
         * Returns the playback state of the source, either “started”, “stopped”, or “paused”
         * 
         * @type {State}
         * @memberof Transport
         */
        readonly state: State;

        /**
         * The swing value. Between 0-1 where 1 equal to the note + half the subdivision.
         * 
         * @type {NormalRange}
         * @memberof Transport
         */
        swing: NormalRange;

        /**
         * Set the subdivision which the swing will be applied to. The default value is an 8th note. Value must be less than a quarter note.
         * 
         * @type {Time}
         * @memberof Transport
         */
        swingSubdivision: Time;

        /**
         * The transports current tick position.
         * 
         * @type {Ticks}
         * @memberof Transport
         */
        ticks: Ticks;

        /**
         * The time signature as just the numerator over 4. For example 4/4 would be just 4 and 6/8 would be 3.
         * 
         * @type {(number | number[])}
         * @memberof Transport
         */
        timeSignature: number | number[];

        /**
         * Remove scheduled events from the timeline after the given time. Repeated events will be removed if their startTime is after the given time
         * 
         * @param {TransportTime} after 
         * @returns {this} 
         * @memberof Transport
         */
        cancel(after: TransportTime): this;

        /**
         * Clear the passed in event id from the timeline
         * 
         * @param {number} eventId 
         * @returns {this} 
         * @memberof Transport
         */
        clear(eventId: EventId): this;

        /**
         * Returns the time aligned to the next subdivision of the Transport. If the Transport is not started, it will return 0. Note: this will not work precisely during tempo ramps.
         * 
         * @param {Time} subdivision 
         * @returns {number} 
         * @memberof Transport
         */
        nextSubdivision(subdivision: Time): number;

        /**
         * Pause the transport and all sources synced to the transport.
         * 
         * @param {Time} time 
         * @returns {this} 
         * @memberof Transport
         */
        pause(time?: Time): this;

        /**
         * Schedule an event along the timeline.
         * 
         * @param {(time: Time) => void} callback 
         * @param {TransportTime} time 
         * @returns {number} 
         * @memberof Transport
         */
        schedule(callback: (time: Time) => void, time: TransportTime): EventId;

        /**
         * Schedule an event that will be removed after it is invoked. Note that if the given time is less than the current transport time, the event will be invoked immediately.
         * 
         * @param {() => void} callback 
         * @param {TransportTime} time 
         * @returns {EventId} 
         * @memberof Transport
         */
        scheduleOnce(callback: (time: Time) => void, time: TransportTime): EventId;

        /**
         * Schedule a repeated event along the timeline. The event will fire at the interval starting at the startTime and for the specified duration.
         * 
         * @param {() => void} callback 
         * @param {Time} interval 
         * @param {TimelinePosition} startTime 
         * @param {Time} duration 
         * @returns {EventId} 
         * @memberof Transport
         */
        scheduleRepeat(callback: (time: Time) => void, interval: Time, startTime?: TimelinePosition, duration?: Time): EventId;

        /**
         * Set the loop start and stop at the same time.
         * 
         * @param {TransportTime} startPosition 
         * @param {TransportTime} endPosition 
         * @returns {this} 
         * @memberof Transport
         */
        setLoopPoints(startPosition: TransportTime, endPosition: TransportTime): this;

        /**
         * Start the transport and all sources synced to the transport.
         * 
         * @param {Time} time 
         * @param {TransportTime} offset 
         * @returns {this} 
         * @memberof Transport
         */
        start(time?: Time, offset?: TransportTime): this;

        /**
         * Stop the transport and all sources synced to the transport.
         * 
         * @param {Time} time 
         * @returns {this} 
         * @memberof Transport
         */
        stop(time?: Time): this;

        /**
         * Attaches the signal to the tempo control signal so that any changes in the tempo will change the signal in the same ratio.
         * 
         * @param {Signal} signal 
         * @param {number} [ratio] 
         * @returns {this} 
         * @memberof Transport
         */
        syncSignal(signal: Signal, ratio?: number): this;

        /**
         * Toggle the current state of the transport. If it is started, it will stop it, otherwise it will start the Transport.
         * 
         * @param {Time} [time] 
         * @returns {this} 
         * @memberof Transport
         */
        toggle(time?: Time): this;

        /**
         * Unsyncs a previously synced signal from the transport’s control. See Tone.Transport.syncSignal.
         * 
         * @param {Signal} signal 
         * @returns {this} 
         * @memberof Transport
         */
        unsyncSignal(signal: Signal): this;
    }

    const Transport: ITransport;

    interface TransportState {}

    type ChainArg = AudioNode | Tone;

    interface IMaster extends Tone {
        
        mute: boolean;

        volume: Signal<Decibels>;

        chain(...args: ChainArg[]): this;
    }

    /**
     * A single master output which is connected to the AudioDestinationNode (aka your speakers). It provides useful conveniences such as the ability to set the volume and mute the entire application. It also gives you the ability to apply master effects to your application.
     * 
     * Like Tone.Transport, A single Tone.Master is created on initialization and you do not need to explicitly construct one.
     */
    const Master: IMaster;
    
    // class Master extends Tone {
    //     volume: Tone.Signal;
    //     mute(): Tone.Master;
    //     unmute(): Tone.Master;
    //     // receive(node:any): Tone.Master; //todo: AudioNode | Tone
    //     // send(node:any): Tone.Master; //todo: AudioNode | Tone
    // }
}