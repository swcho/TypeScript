
declare namespace Tone {

    /**
     * A signal is an audio-rate value. Tone.Signal is a core component of the library. Unlike a number, Signals can be scheduled with sample-level accuracy. Tone.Signal has all of the methods available to native Web Audio AudioParam as well as additional conveniences. Read more about working with signals here.
     * 
     * @class Signal
     * @extends {Param}
     */
    class Signal<T = any> extends Param<T> {
        constructor(value?: number | AudioParam, units?: Type);

        /**
         * When signals connect to other signals or AudioParams, they take over the output value of that signal or AudioParam. For all other nodes, the behavior is the same as a default connect.
         * 
         * @param {(AudioParam | AudioNode | Signal | Tone)} node 
         * @param {number} [outputNumber] 
         * @param {number} [inputNumber] 
         * @returns {this} 
         * @memberof Signal
         */
        connect(node: AudioParam | AudioNode | Signal | Tone, outputNumber?: number, inputNumber?: number): this;
    }

}