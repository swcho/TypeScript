
declare namespace Tone {

    /**
     * Tone.Effect is the base class for effects. Connect the effect between the effectSend and effectReturn GainNodes, then control the amount of effect which goes to the output using the wet control.
     * 
     * @class Effect
     * @extends {AudioNode}
     */
    class Effect extends AudioNode {
        constructor(web?: NormalRange)
        wet: Signal<NormalRange>;
    }

    /**
     * Tone.Distortion is a simple distortion effect using Tone.WaveShaper. Algorithm from a stackoverflow answer.
     * 
     * @class Distortion
     * @extends {Effect}
     */
    class Distortion extends Effect {
        constructor(distortion?: number | Object);
        distortion: number;
        oversample: string;
    }

    /**
     * Tone.AutoPanner is a Tone.Panner with an LFO connected to the pan amount. More on using autopanners here.
     * 
     * @class AutoPanner
     * @extends {Effect}
     */
    class AutoPanner extends Effect {
        constructor(frequency: Frequency);

        /**
         * The amount of panning between left and right. 0 = always center. 1 = full range between left and right.
         * 
         * @type {NormalRange}
         * @memberof AutoPanner
         */
        depth: NormalRange;

        /**
         * How fast the panner modulates between left and right.
         * 
         * @type {Frequency}
         * @memberof AutoPanner
         */
        frequency: Frequency;

        /**
         * Start the effect.
         * 
         * @param {Tone.Time} [Time] 
         * @returns {Tone.AutoPanner} 
         * @memberof AutoPanner
         */
        start(Time?: Tone.Time): this;

        /**
         * Stop the effect.
         * 
         * @param {Tone.Time} [Time] 
         * @returns {this} 
         * @memberof AutoPanner
         */
        stop(Time?: Tone.Time): this;

        /**
         * Sync the panner to the transport.
         * 
         * @param {Time} delay 
         * @returns {this} 
         * @memberof AutoPanner
         */
        sync(delay: Time): this;

        /**
         * Unsync the panner from the transport
         * 
         * @returns {this} 
         * @memberof AutoPanner
         */
        unsync(): this;
    }

    /**
     * Tone.AutoWah connects a Tone.Follower to a bandpass filter (Tone.Filter). The frequency of the filter is adjusted proportionally to the incoming signal’s amplitude. Inspiration from Tuna.js.
     * 
     * @class AutoWah
     * @extends {Effect}
     */
    class AutoWah extends Effect {
        constructor(baseFrequency?: any, octaves?: number, sensitivity?: number);
        Q: Positive;
        baseFrequency: Tone.Frequency;
        gain: number;
        octaves: number;
        sensitivity: Decibels;
    }

    /**
     * Tone.Bitcrusher downsamples the incoming signal to a different bitdepth. Lowering the bitdepth of the signal creates distortion. Read more about Bitcrushing on Wikipedia.
     * 
     * @class BitCrusher
     * @extends {Tone.Effect}
     */
    class BitCrusher extends Effect {
        constructor(bits: any);
        bits: number;
    }

    /**
     * Tone.ChebyShev is a Chebyshev waveshaper, an effect which is good for making different types of distortion sounds. Note that odd orders sound very different from even ones, and order = 1 is no change. Read more at music.columbia.edu.
     * 
     * @class Chebyshev
     * @extends {Tone.Effect}
     */
    class Chebyshev extends Effect {
        constructor(order: Positive | any);
        order: Positive;
        oversample: string;
    }

    /**
     * Tone.Convolver is a wrapper around the Native Web Audio ConvolverNode. Convolution is useful for reverb and filter emulation. Read more about convolution reverb on Wikipedia.
     * 
     * @class Convolver
     * @extends {Tone.Effect}
     */
    class Convolver extends Effect {
        constructor(onload: Function);
        constructor(url: any, onload: Function);
        buffer: AudioBuffer;
        load(url: string, callback?: (e: any)=>any): Promise<Tone.Convolver>;
    }

    /**
     * Tone.FeedbackEffect provides a loop between an audio source and its own output. This is a base-class for feedback effects.
     * 
     * @class FeedbackEffect
     * @extends {Effect}
     */
    class FeedbackEffect extends Effect {
        constructor(initialFeedback?: NormalRange | Object);

        /**
         * controls the amount of feedback
         * 
         * @type {Signal<NormalRange>}
         * @memberof FeedbackEffect
         */
        feedback: Signal<NormalRange>;
    }

    /**
     * Tone.FeedbackDelay is a DelayNode in which part of output signal is fed back into the delay.
     * 
     * @class FeedbackDelay
     * @extends {FeedbackEffect}
     */
    class FeedbackDelay extends FeedbackEffect {
        constructor(delayTime: Time | Object, feedback?: NormalRange);
        delayTime: Time;
    }

    /**
     * Tone.Freeverb is a reverb based on Freeverb. Read more on reverb on Sound On Sound.
     * 
     * @class Freeverb
     * @extends {Effect}
     */
    class Freeverb extends Effect {
        constructor(roomSize?: any, dampening?: number);

        /**
         * The amount of dampening of the reverberant signal.
         * 
         * @type {Signal<Frequency>}
         * @memberof Freeverb
         */
        dampening: Signal<Frequency>;

        /**
         * The roomSize value between. A larger roomSize will result in a longer decay.
         * 
         * @type {Signal}
         * @memberof Freeverb
         */
        roomSize: Signal<NormalRange>;
    }

    /**
     * Tone.JCReverb is a simple Schroeder Reverberator tuned by John Chowning in 1970. It is made up of three allpass filters and four Tone.FeedbackCombFilter.
     * 
     * @class JCReverb
     * @extends {Effect}
     */
    class JCReverb extends Effect {
        constructor(roomSize?: NormalRange | Object);

        /**
         * room size control values between [0,1]
         * 
         * @type {Signal<NormalRange>}
         * @memberof JCReverb
         */
        roomSize: Signal<NormalRange>;
    }

    /**
     * Base class for Stereo effects. Provides effectSendL/R and effectReturnL/R.
     * 
     * @class StereoEffect
     * @extends {Effect}
     */
    class StereoEffect extends Effect {
        constructor();
    }

    /**
     * Base class for stereo feedback effects where the effectReturn is fed back into the same channel.
     * 
     * @class StereoFeedbackEffect
     * @extends {FeedbackEffect}
     */
    class StereoFeedbackEffect extends FeedbackEffect {
        constructor();
    }

    /**
     * Applies a width factor to the mid/side seperation. 0 is all mid and 1 is all side. Algorithm found in kvraudio forums.
     * 
     * Mid *= 2*(1-width)
     * Side *= 2*width
     * 
     * @class StereoWidener
     * @extends {MidSideEffect}
     */
    class StereoWidener extends MidSideEffect {
        constructor(width?: NormalRange | Object);
        width: Tone.Signal<NormalRange>;
    }

    /**
     * Just like a stereo feedback effect, but the feedback is routed from left to right and right to left instead of on the same channel.
     * 
     * @class StereoXFeedbackEffect
     * @extends {FeedbackEffect}
     */
    class StereoXFeedbackEffect extends FeedbackEffect {
        constructor();
    }

    /**
     * Tone.Chorus is a stereo chorus effect with feedback composed of a left and right delay with a Tone.LFO applied to the delayTime of each channel. Inspiration from Tuna.js. Read more on the chorus effect on SoundOnSound.
     * 
     * @class Chorus
     * @extends {StereoXFeedbackEffect}
     */
    class Chorus extends StereoXFeedbackEffect {
        constructor(rate?: Frequency | Object, delayTime?: number, depth?: NormalRange);

        /**
         * The delayTime in milliseconds of the chorus. A larger delayTime will give a more pronounced effect. Nominal range a delayTime is between 2 and 20ms.
         * 
         * @type {number}
         * @memberof Chorus
         */
        delayTime: number

        /**
         * The depth of the effect. A depth of 1 makes the delayTime modulate between 0 and 2*delayTime (centered around the delayTime).
         * 
         * @type {NormalRange}
         * @memberof Chorus
         */
        depth: NormalRange;

        /**
         * Amount of stereo spread. When set to 0, both LFO’s will be panned centrally. When set to 180, LFO’s will be panned hard left and right respectively.
         * 
         * @type {Degress}
         * @memberof Chorus
         */
        spread: Degrees;

        /**
         * The oscillator type of the LFO.
         * 
         * @type {string}
         * @memberof Chorus
         */
        type: string;
    }

    /**
     * Mid/Side processing separates the the ‘mid’ signal (which comes out of both the left and the right channel) and the ‘side’ (which only comes out of the the side channels) and effects them separately before being recombined. Applies a Mid/Side seperation and recombination. Algorithm found in kvraudio forums.
     * 
     * This is a base-class for Mid/Side Effects.
     * 
     * @class MidSideEffect
     * @extends {StereoEffect}
     */
    class MidSideEffect extends StereoEffect {
        constructor();
    }

    /**
     * Tone.Phaser is a phaser effect. Phasers work by changing the phase of different frequency components of an incoming signal. Read more on Wikipedia. Inspiration for this phaser comes from Tuna.js.
     * 
     * @class Phaser
     * @extends {StereoEffect}
     */
    class Phaser extends StereoEffect {
        constructor(rate?: Frequency | Object, octaves?: number, baseFrequency?: number);

        /**
         * The quality factor of the filters
         * 
         * @type {Signal<Positive>}
         * @memberof Phaser
         */
        Q: Signal<Positive>;
        
        /**
         * The the base frequency of the filters.
         * 
         * @type {number}
         * @memberof Phaser
         */
        baseFrequency: number;

        /**
         * the frequency of the effect
         * 
         * @type {Signal<Frequency>}
         * @memberof Phaser
         */
        frequency: Signal<Frequency>;

        /**
         * The number of octaves the phase goes above the baseFrequency
         * 
         * @type {Positive}
         * @memberof Phaser
         */
        octaves: Positive;
    }

    /**
     * Tone.PingPongDelay is a feedback delay effect where the echo is heard first in one channel and next in the opposite channel. In a stereo system these are the right and left channels. PingPongDelay in more simplified terms is two Tone.FeedbackDelays with independent delay values. Each delay is routed to one channel (left or right), and the channel triggered second will always trigger at the same interval after the first.
     * 
     * @class PingPongDelay
     * @extends {StereoXFeedbackEffect}
     */
    class PingPongDelay extends StereoXFeedbackEffect {
        new(delayTime?: Time | Object, feedback?: NormalRange);

        /**
         * the delay time signal
         * 
         * @type {Signal}
         * @memberof PingPongDelay
         */
        delayTime: Signal<Time>;
    }


}