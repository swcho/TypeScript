// Type definitions for TONE.JS
// Project: https://github.com/Tonejs/Tone.js
// Definitions by: Luke Phillips <https://github.com/lukephills>
//                 Pouya Kary <https://github.com/pmkary>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare class Tone {
    constructor(inputs?: number, outputs?: number);
    context: AudioContext;
    input: GainNode;
    output: Tone.Output;
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

declare module Tone {

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

    var Abs: {
        new(): Tone.Abs;
    };

    interface Abs extends Tone.SignalBase {
        dispose(): Tone.Abs;
    }

    var Add: {
        new(value?:number): Tone.Add;
    };

    interface Add extends Tone.Signal {
        dispose(): Tone.Add;
    }

    var AmplitudeEnvelope: {
        new(attack?: any, decay?: Tone.Time, sustain?: number, release?:Tone.Time): Tone.AmplitudeEnvelope; //TODO: Change 'any' to 'Tone.Time | Object'
    };

    interface AmplitudeEnvelope extends Tone.Envelope {
        dispose(): Tone.AmplitudeEnvelope;
    }

    var AMSynth: {
        new(options?: Object): Tone.AMSynth;
    };

    interface AMSynth extends Tone.Monophonic {
        carrier: Tone.MonoSynth;
        frequency: Tone.Signal;
        harmonicity: number;
        modulator: Tone.MonoSynth;
        dispose(): Tone.AMSynth;
        triggerEnvelopeAttack(time?: Tone.Time, velocity?: number): Tone.AMSynth;
        triggerEnvelopeRelease(time?: Tone.Time): Tone.AMSynth;
    }

    var AND: {
        new(inputCount?:number): Tone.AND;
    };

    interface AND extends Tone.SignalBase {
        dispose(): Tone.AND;
    }

    var AudioToGain: {
        new(): Tone.AudioToGain;
    };

    interface AudioToGain extends Tone.SignalBase {
        dispose(): Tone.AudioToGain;
    }

    var AutoPanner: {
        new(frequency?: any): Tone.AutoPanner; //TODO: Number || Object
    };

    interface AutoPanner extends Effect {
        amount: Tone.Signal;
        frequency: Tone.Signal;
        type: string;
        dispose(): Tone.AutoPanner;
        start(Time?: Tone.Time): Tone.AutoPanner;
        stop(Time?: Tone.Time): Tone.AutoPanner;
        sync(): Tone.AutoPanner;
        unsync(): Tone.AutoPanner;
    }

    var AutoWah: {
        new(baseFrequency?: any, octaves?: number, sensitivity?:number): Tone.AutoWah; //Todo number | Object
    };

    interface AutoWah extends Tone.Effect {
        baseFrequency: Tone.Frequency;
        gain: Tone.Signal;
        octaves: number;
        Q: Tone.Signal;
        sensitivity: number;
        dispose(): Tone.AutoWah;
    }

    var BitCrusher: {
        new(bits: any): Tone.BitCrusher; //TODO: Number || Object
    };

    interface BitCrusher extends Tone.Effect {
        bits: number;
        dispose(): Tone.BitCrusher;
    }

    class Buffer extends Tone {
        constructor(url: any);
        static on(name: string, callback: Function);
    }

    interface Buffer extends Tone {
        MAX_SIMULTANEOUS_DOWNLOADS: number;
        duration: number; // Readonly
        loaded: boolean; // Readonly
        onload: (e: any)=>any;
        url: string; // Readonly
        load(url:string, callback?: (e: any)=>any): Tone.Buffer;
        onerror();
        onprogress();
        dispose(): Tone.Buffer;
        get(): AudioBuffer;
        set(buffer: any): Tone.Buffer; //TODO: change any to AudioBuffer | Tone.Buffer
    }

    var Chebyshev: {
        new(order: any): Tone.Chebyshev; //TODO: Number || Object
    };

    interface Chebyshev extends Tone.Effect {
        order: number;
        oversample: string;
        dispose(): Tone.Chebyshev;
    }

    var Chorus: {
        new(rate?: any, delayTime?: number, depth?: number): Tone.Chorus;
    };

    interface Chorus extends Tone.StereoXFeedbackEffect {
        delayTime: number
        depth: number;
        frequency: Tone.Signal;
        type: string;
        dispose(): Tone.Chorus;
    }

    var Clip: {
        new(min: number, max: number): Tone.Clip;
    };

    interface Clip extends Tone.SignalBase {
        max: Tone.Signal;
        min: Tone.Signal;
        dispose(): Tone.Clip;
    }

    var Compressor: {
        new(threshold?: any, ratio?: number): Tone.Compressor; //TODO: Number || Object
    };

    interface Compressor extends Tone {
        attack: Tone.Signal;
        knee: AudioParam;
        ratio: AudioParam;
        release: Tone.Signal;
        threshold: AudioParam;
        dispose(): Tone.Compressor;
    }

    var Convolver: {
        new(url: any): Tone.Convolver; //TODO: Change any to 'string | AudioBuffer' when available
    };

    interface Convolver extends Tone.Effect {
        buffer: AudioBuffer;
        load(url: string, callback?: (e: any)=>any): Tone.Convolver;
        dispose(): Tone.Convolver;
    }

    var CrossFade: {
        new(initialFade?: number): Tone.CrossFade;
    };

    interface CrossFade extends Tone {
        a: GainNode;
        b: GainNode;
        fade: Tone.Signal;
        dispose(): Tone.CrossFade;
    }

    var Distortion: {
        new(distortion: any): Tone.Distortion; //TODO: Number || Object
    };

    interface Distortion extends Tone.Effect {
        distortion: number;
        oversample: string;
        dispose(): Tone.Distortion;
    }

    var DuoSynth: {
        new(options?: any): Tone.DuoSynth;
    };

    interface DuoSynth extends Tone.Monophonic {
        frequency: Tone.Signal;
        harmonicity: number;
        vibratoAmount: Tone.Signal;
        vibratoRate: Tone.Signal;
        voice0: Tone.MonoSynth;
        voice1: Tone.MonoSynth;
        triggerEnvelopeAttack(time?: Tone.Time, velocity?: number): Tone.DuoSynth;
        triggerEnvelopeRelease(time?: Tone.Time): Tone.DuoSynth;
    }

    var Effect: {
        new(initialWet?: number): Tone.Effect;
    };

    interface Effect extends Tone {
        wet: Tone.Signal;
        bypass(): Tone.Effect;
        dispose(): Tone.Effect;
    }

    var Envelope: {
        new(attack: any, decay?: Tone.Time, sustain?: number, release?: Tone.Time): Tone.Envelope;  //TODO: Change 'any' to 'Tone.Time | Object'
    };

    interface Envelope extends Tone {
        attack: Tone.Time;
        decay: Tone.Time;
        release: Tone.Time;
        sustain: number;
        dispose(): Tone.Envelope;
        triggerAttack(time?: Tone.Time, velocity?: number): Tone.Envelope;
        triggerAttackRelease(duration: Tone.Time, time?: Tone.Time, velocity?: number): Tone.Envelope;
        triggerRelease(time?: Tone.Time): Tone.Envelope;
    }

    var EQ3: {
        new(lowLevel?: any, midLevel?: number, highLevel?: number): Tone.EQ3; //TODO: Change 'any' to 'number | Object'
    };

    interface EQ3 extends Tone {
        highFrequency: Tone.Signal;
        high: GainNode;
        lowFrequency: Tone.Signal;
        low: GainNode;
        mid: GainNode;
        dispose(): Tone.EQ3;
    }

    var Equal: {
        new(value: number): Tone.Equal;
    };

    interface Equal extends Tone.SignalBase {
        value: number;
        dispose(): Tone.Equal;
    }

    var EqualPowerGain: {
        new(): Tone.EqualPowerGain;
    };

    interface EqualPowerGain extends Tone.SignalBase {
        dispose(): Tone.EqualPowerGain;
    }

    var EqualZero: {
        new(): Tone.EqualZero;
    };

    interface EqualZero extends Tone.SignalBase {
        dispose(): Tone.EqualZero;
    }

    var Expr: {
        new(expr: string): Tone.Expr;
    };

    interface Expr extends Tone.SignalBase {
        input: any; //todo: any[]
        output: any; // todo: Tone
        dispose(): Tone.Expr;
    }

    var FeedbackCombFilter: {
        new(minDelay?: number, maxDelay?: number): Tone.FeedbackCombFilter;
    };

    interface FeedbackCombFilter extends Tone {
        delayTime: Tone.Time;
        resonance: Tone.Signal;
        dispose(): Tone.FeedbackCombFilter;
    }

    var FeedbackDelay: {
        new(delayTime: any): Tone.FeedbackDelay;
    };

    interface FeedbackDelay extends Tone.FeedbackEffect {
        delayTime: Tone.Signal;
        dispose(): Tone.FeedbackDelay;
    }

    var FeedbackEffect: {
        new(initialFeedback?: any): Tone.FeedbackEffect;
    };

    interface FeedbackEffect extends Tone.Effect {
        feedback: Tone.Signal;
        dispose(): Tone.FeedbackEffect;
    }

    var Filter: {
        new(freq?: any, type?: string, rolloff?: number): Tone.Filter; //TODO: Number || Object
    };

    interface Filter extends Tone {
        detune: Tone.Signal;
        frequency: Tone.Signal;
        gain: AudioParam;
        Q: Tone.Signal;
        rolloff: number;
        type: string;
        dispose(): Tone.Filter;
    }

    var FMSynth: {
        new(options?: any): Tone.FMSynth;
    };

    interface FMSynth extends Tone.Monophonic {
        carrier: Tone.MonoSynth;
        frequency: Tone.Signal;
        harmonicity: number;
        modulationIndex: number;
        modulator: Tone.MonoSynth;
        dispose(): Tone.FMSynth;
        triggerEnvelopeAttack(time?: Tone.Time, velocity?: number): Tone.FMSynth;
        triggerEnvelopeRelease(time?: Tone.Time): Tone.FMSynth;
    }

    var Follower: {
        new(attack?: Tone.Time, release?: Tone.Time): Tone.Follower;
    };

    interface Follower extends Tone {
        attack: Tone.Time;
        release: Tone.Time;
        dispose(): Tone.Follower;
    }

    var Freeverb: {
        new(roomSize?: any, dampening?: number): Tone.Freeverb;
    };

    interface Freeverb extends Tone.Effect {
        dampening: Tone.Signal;
        roomSize: Tone.Signal;
        dispose(): Tone.Freeverb;
    }

    class TimeBase {
        constructor( val: string | number, units?: string );
        set ( exprString: string ): TimeBase;
        add ( val: Time, units?: string ): TimeBase;
        sub ( val: Time, units?: string ): TimeBase;
        mult ( val: Time, units?: string ): TimeBase;
        div ( val: Time, units?: string ): TimeBase;
        eval ( ): number;
        dispose: TimeBase;
    }

    class Frequency extends TimeBase {
        constructor( val: string | number, units?: string );
        toMidi( ): number;
        toNote( ): string;
        transpose ( interval: number ): Frequency;
        harmonize( intervals: number[ ]): Frequency;
        toSeconds( ): number;
        toTicks( ): number;
        midiToFrequency( midi: string ): Frequency;
        frequencyToMidi( frequency: Frequency ): string;
    }

    var Gate: {
        new(thresh?: number, attackTime?: Tone.Time, releaseTime?: Tone.Time): Tone.Gate;
    };

    interface Gate extends Tone {
        attack: Tone.Time;
        release: Tone.Time;
        threshold: Tone.Time;
        dispose(): Tone.Gate;
    }

    var GreaterThan: {
        new(value?: number): Tone.GreaterThan;
    };

    interface GreaterThan extends Tone.Signal {
        dispose(): Tone.GreaterThan;
    }

    var GreaterThanZero: {
        new(): Tone.GreaterThanZero;
    };

    interface GreaterThanZero extends Tone.SignalBase {
        dispose(): Tone.GreaterThanZero;
    }

    var IfThenElse: {
        new(): Tone.IfThenElse;
    };

    interface IfThenElse extends Tone.SignalBase {
        dispose(): Tone.IfThenElse;
    }

    var Instrument: {
        new(): Tone.Instrument;
    };

    interface Instrument extends Tone {
        volume: Tone.Signal;
        triggerAttack(note: any, time?: Tone.Time, velocity?: number): Tone.Instrument; //Todo: string | number
        triggerAttackRelease(note: any, duration: Tone.Time, time?: Tone.Time, velocity?: number): Tone.Instrument; //Todo: string | number
        triggerRelease(time?: Tone.Time): Tone.Instrument;
        dispose(): Tone.Instrument;
    }

    var JCReverb: {
        new(roomSize: number): Tone.JCReverb; //TODO: Number || Object
    };

    interface JCReverb extends Tone.Effect {
        roomSize: Tone.Signal;
        dispose(): Tone.JCReverb;
    }

    var LessThan: {
        new(value?: number): Tone.LessThan;
    };

    interface LessThan extends Tone.Signal {
        dispose(): Tone.LessThan;
    }

    var LFO: {
        new(frequency?: Tone.Time, outputMin?: number, outputMax?: number): Tone.LFO; //TODO: Number || Object
    };

    interface LFO extends Tone.Oscillator {
        amplitude: Tone.Signal;
        frequency: Tone.Signal;
        max: number;
        min: number;
        oscillator: Tone.Oscillator;
        phase: number;
        type: string;
        dispose(): Tone.LFO;
        start(time?: Tone.Time): Tone.LFO;
        stop(time?: Tone.Time): Tone.LFO;
        sync(delay?: Tone.Time): Tone.LFO;
        unsync(): Tone.LFO;
    }

    var Limiter: {
        new(threshold: AudioParam): Tone.Limiter;
    };

    interface Limiter extends Tone {
        dispose(): Tone.Limiter;
    }

    var LowpassCombFilter: {
        new(minDelay?: number, maxDelay?: number): Tone.LowpassCombFilter;
    };

    interface LowpassCombFilter extends Tone {
        dampening: Tone.Signal;
        delayTime: Tone.Time;
        resonance: Tone.Signal;
        dispose(): Tone.LowpassCombFilter;
        setDelayTimeAtTime(delayAmount: Tone.Time, time?: Tone.Time): Tone.LowpassCombFilter;
    }

    class Master extends Tone {
        volume: Tone.Signal;
        mute(): Tone.Master;
        unmute(): Tone.Master;
        // receive(node:any): Tone.Master; //todo: AudioNode | Tone
        // send(node:any): Tone.Master; //todo: AudioNode | Tone
    }

    var Max: {
        new(max?: number): Tone.Max;
    };

    interface Max extends Tone.Signal {
        dispose(): Tone.Max;
    }

    var Merge: {
        new(): Tone.Merge;
    };

    interface Merge extends Tone {
        left: GainNode;
        right: GainNode;
        dispose(): Tone.Merge;
    }

    var Meter: {
        new(channels?: number, smoothing?: number, clipMemory?:number): Tone.Meter;
    };

    interface Meter extends Tone {
        dispose(): Tone.Meter;
        getDb(channel?:number): number;
        getLevel(channel?:number): number;
        getValue(channel?:number): number;
        isClipped(): boolean;
    }

    var Microphone: {
        new(inputNum?: number): Tone.Microphone;
    };

    interface Microphone extends Tone.Source {
        dispose(): Tone.Microphone;
    }

    var MidSideEffect : {
        new(): Tone.MidSideEffect;
    };

    interface MidSideEffect extends Tone.StereoEffect {
        midReturn: GainNode;
        midSend: Tone.Expr;
        sideReturn: GainNode;
        sideSend: Tone.Expr;
        dispose(): Tone.MidSideEffect;
    }

    var Min: {
        new(min: number): Tone.Min;
    };

    interface Min extends Tone.Signal {
        dispose(): Tone.Min;
    }

    var Modulo: {
        new(modulus: number, bits?:number): Tone.Modulo;
    };

    interface Modulo extends Tone.SignalBase {
        value: number;
        dispose(): Tone.Modulo;
    }

    var Mono: {
        new(): Tone.Mono;
    };

    interface Mono extends Tone {
        dispose(): Tone.Mono;
    }

    var Monophonic: {
        new(): Tone.Monophonic;
    };

    interface Monophonic extends Tone.Instrument {
        portamento: Tone.Time;
        setNote(note: any):Tone.Monophonic; //Todo: number | string
    }

    var MonoSynth: {
        new(options?: any): Tone.MonoSynth;
    };

    interface MonoSynth extends Tone.Monophonic {
        detune: Tone.Signal;
        envelope: Tone.Envelope;
        filter: Tone.Filter;
        filterEnvelope: Tone.Envelope;
        frequency: Tone.Signal;
        oscillator: Tone.OmniOscillator;
        dispose(): Tone.MonoSynth;
        triggerEnvelopeAttack(time?: Tone.Time, velocity?: number): Tone.MonoSynth;
        triggerEnvelopeRelease(time?: Tone.Time): Tone.MonoSynth;
    }

    var MultibandCompressor: {
        new(options: Object): Tone.MultibandCompressor;
    };

    interface MultibandCompressor extends Tone {
        high: Tone.Compressor;
        highFrequency: Tone.Signal;
        low: Tone.Compressor;
        lowFrequency: Tone.Signal;
        mid: Tone.Compressor;
        dispose(): Tone.MultibandCompressor;
    }

    var MultibandEQ: {
        new(options?: any): Tone.MultibandEQ;
    };

    interface MultibandEQ extends Tone {
        //set(params: Object): void;
        setType(type: string, band: number): void;
        getType(band: number): string;
        setFrequency(freq: number, band: number): void;
        getFrequency(band: number): number;
        setQ(Q: number, band: number): void;
        getQ(band: number): number;
        getGain(band: number): number;
        setGain(gain: number, band: number): void;
    }

    var MultibandSplit: {
        new(lowFrequency: number, highFrequency: number): Tone.MultibandSplit;
    };

    interface MultibandSplit extends Tone {
        high: Tone.Filter;
        highFrequency: Tone.Signal;
        low: Tone.Filter;
        lowFrequency: Tone.Signal;
        mid: Tone.Filter;
        dispose(): Tone.MultibandSplit;
    }

    var Multiply: {
        new(value?: number): Tone.Multiply;
    };

    interface Multiply extends Tone.Signal {
        dispose(): Tone.Multiply;
    }

    var Negate: {
        new(): Tone.Negate;
    };

    interface Negate extends Tone.SignalBase {
        dispose(): Tone.Negate;
    }

    var Noise: {
        new(type: string): Tone.Noise;
    };

    interface Noise extends Tone.Source {
        type: string;
        dispose(): Tone.Noise;
    }

    var NoiseSynth: {
        new(options?: Object): Tone.NoiseSynth;
    };

    interface NoiseSynth extends Tone.Instrument {
        envelope: Tone.Envelope;
        filter: Tone.Filter;
        filterEnvelope: Tone.Envelope;
        noise: Tone.Noise;
        dispose(): Tone.NoiseSynth;
        triggerAttack(time?: Tone.Time, velocity?: number): Tone.NoiseSynth;
        triggerAttackRelease(duration: Tone.Time, time?: Tone.Time, velocity?: number): Tone.NoiseSynth;
        triggerRelease(time?: Tone.Time): Tone.NoiseSynth;
    }

    var Normalize: {
        new(min?: number, max?: number): Tone.Normalize;
    };

    interface Normalize extends Tone.SignalBase {
        max: number;
        min: number;
        dispose(): Tone.Normalize;
    }

    var Note: {
        new(channel: any, time:Tone.Time, value: any): Tone.Note; //todo: channel: number|string, value: string|number|Object|Array
    };

    interface Note {
        value: any; //todo: string | number | Object
        parseScore(score: Object): Tone.Note[];
        route(channel:any, callback?: (e: any)=>any): void; //todo: string | number
        unroute(channel: any, callback?: (e: any)=>any): void; //todo: string | number;
        dispose(): Tone.Note;
    }

    var OmniOscillator: {
        new(frequency?: Tone.Frequency, type?: string): Tone.OmniOscillator; //TODO: Number || Object
    };

    interface OmniOscillator extends Tone.Source {
        detune: Tone.Signal;
        frequency: Tone.Signal;
        modulationFrequency: Tone.Signal;
        phase: number;
        type: string;
        width: Tone.Signal;
        dispose(): Tone.OmniOscillator;
    }

    var OR: {
        new(inputCount?:number): Tone.OR;
    };

    interface OR extends Tone.SignalBase {
        dispose(): Tone.OR;
    }

    var Oscillator: {
        new(frequency?: any, type?: string): Tone.Oscillator; //todo: number | string
    };

    interface Oscillator extends Tone.Source {
        detune: Tone.Signal;
        frequency: Tone.Signal;
        phase: number;
        type: string;
        dispose(): Tone.Oscillator;
        syncFrequency(): Tone.Oscillator;
        unsyncFrequency(): Tone.Oscillator;
    }

    var Panner: {
        new(initialPan?: number): Tone.Panner;
    };

    interface Panner extends Tone {
        pan: Tone.Signal;
        dispose(): Tone.Panner;
    }

    class PanVol extends Tone {
        constructor(pan: number, volume: number);
        // output: GainNode;
        volume: Tone.Signal;
        dispose(): Tone.PanVol;
    }

    var Phaser: {
        new(rate?: any, depth?: number, baseFrequency?: number): Tone.Phaser; //TODO: change 'any' to 'number | Object'
    };

    interface Phaser extends Tone.StereoEffect {
        baseFrequency: number;
        depth: number;
        frequency: Tone.Signal;
        dispose(): Tone.Phaser;
    }

    var PingPongDelay: {
        new(delayTime?: any, feedback?: number): Tone.PingPongDelay; //TODO: Tone.Time || Object
    };

    interface PingPongDelay extends Tone.StereoXFeedbackEffect {
        delayTime: Tone.Signal;
        dispose(): Tone.PingPongDelay;
    }

    var Player: {
        new(url?: string, onload?: (e: any)=>any): Tone.Player; //todo: string | AudioBuffer
    };

    interface Player extends Tone.Source {
        buffer: AudioBuffer;
        duration: number;
        loop: boolean;
        loopEnd: Tone.Time;
        loopStart: Tone.Time;
        playbackRate: number;
        retrigger: boolean;
        dispose(): Tone.Player;
        load(url:string, callback?:(e: any)=>any):  Tone.Player;
        setLoopPoints(loopStart:Tone.Time, loopEnd:Tone.Time): Tone.Player;
    }

    var PluckSynth : {
        new(options?: Object): Tone.PluckSynth;
    };

    interface PluckSynth extends Tone.Instrument {
        attackNoise: number;
        dampening: Tone.Signal;
        resonance: Tone.Signal;
        dispose(): Tone.PluckSynth;
        triggerAttack(note: any, time?: Tone.Time): Tone.PluckSynth; //todo: string | number
    }

    var PolySynth : {
        new(voicesAmount?: any, voice?: ()=>any): Tone.PolySynth; // number | Object
    };

    interface PolySynth extends Tone.Instrument {
        voices: any[];
        dispose(): Tone.PolySynth;
        get(params?: any[]);
        set(params: Object);
        setPreset(presetName: string): Tone.PolySynth;
        triggerAttack(value: any, time?: Tone.Time, velocity?: number): Tone.PolySynth; //todo: string | number | Object| string[] | number[]
        triggerAttackRelease(value: any, duration: Tone.Time, time?: Tone.Time, velocity?: number): Tone.PolySynth; //todo: string | number | Object | string[] | number[]
        triggerRelease(value: any, time?: Tone.Time): Tone.PolySynth; //todo: string | number | Object | string[] | number[]
    }

    var Pow: {
        new(exp: number): Tone.Pow;
    };

    interface Pow extends Tone.SignalBase {
        value: number;
        dispose(): Tone.Pow;
    }

    var PulseOscillator:  {
        new(frequency?: number, width?:number): Tone.PulseOscillator;
    };

    interface PulseOscillator extends Tone.Oscillator {
        detune: Tone.Signal;
        frequency: Tone.Signal;
        phase: number;
        width: Tone.Signal;
        dispose(): Tone.PulseOscillator;
    }

    var PWMOscillator:  {
        new(frequency?: Tone.Frequency, modulationFrequency?: number): Tone.PWMOscillator;
    };

    interface PWMOscillator extends Tone.Oscillator {
        detune: Tone.Signal;
        frequency: Tone.Signal;
        modulationFrequency :Tone.Signal;
        phase: number;
        width: Tone.Signal;
        dispose(): Tone.PWMOscillator;
    }

    var Route: {
        new(outputCount?: number): Tone.Route;
    };

    interface Route extends Tone.SignalBase {
        gate: Tone.Signal;
        dispose(): Tone.Route;
        select(which?: number, time?: Tone.Time): Tone.Route;
    }

    var Sampler: {
        new(urls: any, options?: Object): Tone.Sampler; //todo: Object | string
    };

    interface Sampler extends Tone.Instrument {
        envelope: Tone.Envelope;
        filter: BiquadFilterNode;
        filterEnvelope: Tone.Envelope;
        pitch: number;
        player: Tone.Player;
        sample: any; //todo: number | string
        dispose(): Tone.Sampler;
        triggerAttack(sample?: string, time?: Tone.Time, velocity?: number): Tone.Sampler;
        triggerRelease(time?: Tone.Time): Tone.Sampler;
    }

    var Scale: {
        new(outputMin?: number, outputMax?: number): Tone.Scale;
    };

    interface Scale extends Tone.SignalBase {
        max: number;
        min: number;
        dispose(): Tone.Scale;
    }

    var ScaledEnvelope: {
        new(attack?: any, decay?: Tone.Time, sustain?: number, release?:Tone.Time): Tone.ScaledEnvelope; //TODO: Change 'any' to 'Tone.Time | Object'
    };

    interface ScaledEnvelope extends Tone.Envelope {
        exponent: number;
        max: number;
        min: number;
        dispose(): Tone.ScaledEnvelope;
    }

    var ScaleExp: {
        new(outputMin?: number, outputMax?: number, exponent?: number): Tone.ScaleExp;
    };

    interface ScaleExp extends Tone.SignalBase {
        exponent: number;
        max: number;
        min: number;
        dispose(): Tone.ScaleExp;
    }

    var Select: {
        new(sourceCount?: number): Tone.Select;
    };

    interface Select extends Tone.SignalBase {
        gate: Tone.Signal;
        dispose(): Tone.Select;
        select(which: number, time?: Tone.Time): Tone.Select;
    }

    module Signal {
        interface Unit{}
        interface Type{}
    }

    var Signal: {
        new(value?: any, units?: Tone.Signal.Unit): Tone.Signal; //todo: number | AudioParam
    };

    interface Signal extends Tone.SignalBase {
        units: Tone.Signal.Type;
        value: any; //TODO: Tone.Time | Tone.Frequency | number
        cancelScheduledValues(startTime: Tone.Time): Tone.Signal;
        dispose(): Tone.Signal;
        exponentialRampToValueAtTime(value: number, endTime: Tone.Time): Tone.Signal;
        exponentialRampToValueNow(value: number, rampTime: Tone.Time): Tone.Signal;
        linearRampToValueAtTime(value: number, endTime: Tone.Time): Tone.Signal;
        linearRampToValueNow(value: number, rampTime: Tone.Time): Tone.Signal;
        rampTo(value: number, rampTime: Tone.Time): Tone.Signal;
        setCurrentValueNow(now?: number): Tone.Signal;
        setTargetAtTime(value: number, startTime: Tone.Time, timeConstant: number): Tone.Signal;
        setValueAtTime(value: number, time: Tone.Time): Tone.Signal;
        setValueCurveAtTime(values: number[], startTime: Tone.Time, duration: Tone.Time): Tone.Signal;
    }

    class SignalBase extends Tone {
        constructor();
        // connect(node: any, outputNumber?: number, inputNumber?: number): Tone.SignalBase; //TODO: Change 'any' to 'AudioParam | AudioNode | Tone.Signal | Tone' when available
    }

    var Source: {
        new(): Tone.Source;
    };

    interface Source extends Tone {
        State: string;
        onended: ()=>any;
        state: Tone.Source.State;
        volume: Tone.Signal;
        dispose(): Tone.Source;
        start(time?: Tone.Time): Tone.Source;
        stop(time?: Tone.Time): Tone.Source;
        sync(delay?: Tone.Time): Tone.Source;
        unsync(): Tone.Source;
    }

    module Source {
        interface State{}
    }

    var Split: {
        new(): Tone.Split;
    };

    interface Split extends Tone {
        left: GainNode;
        right: GainNode;
        dispose(): Tone.Split;
    }

    var StereoEffect: {
        new(): Tone.StereoEffect;
    };

    interface StereoEffect extends Tone.Effect {
        effectReturnL: GainNode;
        effectReturnR: GainNode;
        dispose(): Tone.StereoEffect;
    }

    var StereoFeedbackEffect: {
        new(): Tone.StereoFeedbackEffect;
    };

    interface StereoFeedbackEffect extends Tone.FeedbackEffect {
        feedback: Tone.Signal;
        dispose(): Tone.StereoFeedbackEffect;
    }

    var StereoWidener: {
        new(width?: any): Tone.StereoWidener; //TODO change 'any' to 'number | Object'
    };

    interface StereoWidener extends Tone.MidSideEffect {
        width: Tone.Signal;
        dispose(): Tone.StereoWidener;
    }

    var StereoXFeedbackEffect: {
        new(): Tone.StereoXFeedbackEffect;
    };

    interface StereoXFeedbackEffect extends Tone.FeedbackEffect {
        feedback: Tone.Signal;
        dispose(): Tone.StereoXFeedbackEffect;
    }

    var Switch: {
        new(): Tone.Switch;
    };

    interface Switch extends Tone.SignalBase {
        gate: Tone.Signal;
        close(time: Tone.Time): Tone.Switch;
        dispose(): Tone.Switch;
        open(time: Tone.Time): Tone.Switch
    }

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
    interface Transport extends Emitter {
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
         * @type {BPM}
         * @memberof Transport
         */
        bpm: BPM;

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
        stop(time: Time): this;

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

    const Transport: Transport;


    interface TransportState {}

    var WaveShaper: {
        new(mapping: any, bufferLen?: number): Tone.WaveShaper; //TODO: change 'any' to 'Function | Array | number'
    };

    interface WaveShaper extends Tone.SignalBase {
        curve: number[];
        oversample: string;
    }

    class AudioNode extends Tone {
        // MEMBERS
        context
        // METHODS
        connect(unit: Tone | AudioParam | AudioNode);
        // disconnect
        // dispose
        // toMaster
        // toMaster
    }

    class BufferSource extends AudioNode {
        constructor(buffer: AudioBuffer | Buffer, onload?: Function);

        // MEMBERS
        // buffer
        // curve
        // fadeIn
        // fadeOut
        // loop
        // loopEnd
        // loopStart
        // onended
        playbackRate
        // state
        // context

        // METHODS
        // dispose

        // https://tonejs.github.io/docs/r11/BufferSource#start
        start(startTime: Time, offset: Time, duration: Time, gain: any/* Gain */, faeInTime: Time);

        // stop
        // connect
        // disconnect
        // toMaster
    }

    class Buffers extends Tone {
        constructor(urls, callbacks?, baseUrl?);
    }

    // ??
    class Output extends Tone {
        gain: {
            value: number;
        };
        start(time: number, arg1, arg2, arg3, arg4);
        stop(time: number, arg1);
        buffer;
    }

    // https://tonejs.github.io/docs/r11/Draw
    class Draw {
        // MEMBERS
        anticipation
        expiration

        // METHODS
        cancel
        schedule

        // STATIC METHODS
        // cancel
        static schedule(callback: Function, time: Time);
    }

    class Context {

    }

    // https://tonejs.github.io/docs/r11/Part
    export class Part {
        constructor(callback: Function, events: any[]);
        // MEMBERS
        length
        loop
        loopEnd
        loopStart
        playbackRate
        probability
        callback
        mute
        progress
        state
        // METHODS
        add
        at
        cancel
        dispose
        remove
        removeAll
        start
        stop
    }

    export function now(): number;
    export const context: Context;
}

export = Tone;
