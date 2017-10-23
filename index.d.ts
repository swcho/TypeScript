// Type definitions for TONE.JS
// Project: https://github.com/Tonejs/Tone.js
// Definitions by: Luke Phillips <https://github.com/lukephills>
//                 Pouya Kary <https://github.com/pmkary>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="type.d.ts"/>
/// <reference path="core.d.ts"/>
/// <reference path="signal.d.ts"/>
/// <reference path="instrument.d.ts"/>
/// <reference path="effect.d.ts"/>
/// <reference path="source.d.ts"/>
/// <reference path="component.d.ts"/>

declare namespace Tone {

    var Abs: {
        new(): Tone.Abs;
    };

    interface Abs extends Tone.SignalBase {
        dispose(): Tone.Abs;
    }

    class Add extends Signal {
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

    var CrossFade: {
        new(initialFade?: number): Tone.CrossFade;
    };

    interface CrossFade extends Tone {
        a: GainNode;
        b: GainNode;
        fade: Tone.Signal;
        dispose(): Tone.CrossFade;
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

    var Follower: {
        new(attack?: Tone.Time, release?: Tone.Time): Tone.Follower;
    };

    interface Follower extends Tone {
        attack: Tone.Time;
        release: Tone.Time;
        dispose(): Tone.Follower;
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

    class GreaterThan extends Tone.Signal {
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

    class LessThan extends Tone.Signal {
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

    class Max extends Tone.Signal {
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

    class Min extends Tone.Signal {
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

    class Multiply extends Tone.Signal {
    }

    var Negate: {
        new(): Tone.Negate;
    };

    interface Negate extends Tone.SignalBase {
        dispose(): Tone.Negate;
    }

    var Normalize: {
        new(min?: number, max?: number): Tone.Normalize;
    };

    interface Normalize extends Tone.SignalBase {
        max: number;
        min: number;
        dispose(): Tone.Normalize;
    }

    var OR: {
        new(inputCount?:number): Tone.OR;
    };

    interface OR extends Tone.SignalBase {
        dispose(): Tone.OR;
    }

    var Panner: {
        new(initialPan?: number): Tone.Panner;
    };

    interface Panner extends Tone {
        pan: Tone.Signal;
        dispose(): Tone.Panner;
    }

    var Pow: {
        new(exp: number): Tone.Pow;
    };

    interface Pow extends Tone.SignalBase {
        value: number;
        dispose(): Tone.Pow;
    }

    var Route: {
        new(outputCount?: number): Tone.Route;
    };

    interface Route extends Tone.SignalBase {
        gate: Tone.Signal;
        dispose(): Tone.Route;
        select(which?: number, time?: Tone.Time): Tone.Route;
    }

    var Scale: {
        new(outputMin?: number, outputMax?: number): Tone.Scale;
    };

    interface Scale extends Tone.SignalBase {
        max: number;
        min: number;
        dispose(): Tone.Scale;
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

    /**
     * A signal which adds the method getValueAtTime. Code and inspiration from https://github.com/jsantell/web-audio-automation-timeline
     * 
     * @class TimelineSignal
     * @extends {Signal}
     */
    class TimelineSignal extends Signal {
        constructor(value?: number, units?: Type);

        /**
         * The current value of the signal.
         * 
         * @type {number}
         * @memberof TimelineSignal
         */
        value: number;
    }

    class TickSignal extends TimelineSignal {
        constructor(value: number);
    }

    class SignalBase extends Tone {
        constructor();
        // connect(node: any, outputNumber?: number, inputNumber?: number): Tone.SignalBase; //TODO: Change 'any' to 'AudioParam | AudioNode | Tone.Signal | Tone' when available
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

    var Switch: {
        new(): Tone.Switch;
    };

    interface Switch extends Tone.SignalBase {
        gate: Tone.Signal;
        close(time: Tone.Time): Tone.Switch;
        dispose(): Tone.Switch;
        open(time: Tone.Time): Tone.Switch
    }

    var WaveShaper: {
        new(mapping: any, bufferLen?: number): Tone.WaveShaper; //TODO: change 'any' to 'Function | Array | number'
    };

    interface WaveShaper extends Tone.SignalBase {
        curve: number[];
        oversample: string;
    }

    type Type = Object;

    const Default: Type;


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

    class BufferSourceNode {
        // ?
    }


    type TimeoutId = number;
    // https://tonejs.github.io/docs/r11/Context
    /**
     * Wrapper around the native AudioContext.
     * 
     * @class Context
     * @extends {Emitter}
     */
    class Context extends Emitter {
        constructor(context?: AudioContext);

        /**
         * What the source of the clock is, either “worker” (Web Worker [default]), “timeout” (setTimeout), or “offline” (none).
         * 
         * @type {('worker' | 'timeout' | 'offline')}
         * @memberof Context
         */
        clockSource: 'worker' | 'timeout' | 'offline';

        /**
         * The type of playback, which affects tradeoffs between audio output latency and responsiveness. In addition to setting the value in seconds, the latencyHint also accepts the strings “interactive” (prioritizes low latency), “playback” (prioritizes sustained playback), “balanced” (balances latency and performance), and “fastest” (lowest latency, might glitch more often).
         * 
         * @type {(Seconds | 'interactive' | 'playback' | 'balanced' | 'fastest')}
         * @memberof Context
         */
        latencyHint: Seconds | 'interactive' | 'playback' | 'balanced' | 'fastest';

        /**
         * How often the Web Worker callback is invoked. This number corresponds to how responsive the scheduling can be. Context.updateInterval + Context.lookAhead gives you the total latency between scheduling an event and hearing it.
         * 
         * @type {number}
         * @memberof Context
         */
        updateInterval: number;

        /**
         * Clears a previously scheduled timeout with Tone.context.setTimeout
         * 
         * @param {TimeoutId} id 
         * @returns {this} 
         * @memberof Context
         */
        clearTimeout(id: TimeoutId): this;

        /**
         * Generate a looped buffer at some constant value.
         * 
         * @param {number} val 
         * @returns {BufferSourceNode} 
         * @memberof Context
         */
        getConstant(val: number): BufferSourceNode;

        /**
         * The current audio context time
         * 
         * @type {number}
         * @memberof Context
         */
        now(): number;

        /**
         * A setTimeout which is gaurenteed by the clock source. Also runs in the offline context.
         * 
         * @param {() => void} fn 
         * @param {Seconds} timeout 
         * @returns {TimeoutId} 
         * @memberof Context
         */
        setTimeout(fn: () => void, timeout: Seconds): TimeoutId;

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

declare module 'tone' {
    export = Tone;
}