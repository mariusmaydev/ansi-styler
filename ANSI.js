
/**
 * @class
 * @example
 * let s = new S_ANSI();
 * let str = s.bold + "John" + s.reset + s.cFG.red + "Doe";
 *
 * console.log(str);
 * @example
 * let s = S_ANSI.use;
 * let str = s.bold + "John" + s.reset + s.cFG.red + "Doe";
 *
 * console.log(str);
 * @see
 * 📗❌❗✔✅🆚💥❓❔🟥🟩🟦🔹💡⚠📔⚡✅ℹ☑🔄📝
 */
class S_ANSI {
    constructor(){}
    static {
        /**
         * @example
         * let str = "text1 \\i\>text2\\r\>\\cFG.lightRed\>text3";
         *     str = str.parseANSI();
         *
         * console.log(str);
         *
         * @returns {string} parsed ANSI string
         */
        String.prototype.parseANSI = function(){
            return S_ANSI.parse(this);
        }
    }
    static get use(){
        return new S_ANSI();
    }
    /**
     * @example
     *
     * let str = "text1 \\i\>text2\\r\>\\cFG.lightRed\>text3";
     * let parsed_str = S_ANSI.parse(str);
     *
     * console.log(parsed_str);
     *
     * @example
     * let str = "text1 \\i\>text2\\r\>\\cFG.lightRed\>text3";
     *     str = str.parseANSI();
     *
     * console.log(str);
     *
     * @param {string} str
     * @returns {string} parsed string
     */
    static parse(str){
        let s = S_ANSI.use;
        console.log(Object.getOwnPropertyNames(s));
        for(const e of Object.entries(s)){
            str = str.replace("\\" + e[0]+ "\>", e[1]);
        }
        for(const e of Object.entries(s.cBG)){
            str = str.replace("\\cBG." + e[0]+ "\>", e[1]);
        }
        for(const e of Object.entries(s.cFG)){
            str = str.replace("\\cFG." + e[0]+ "\>", e[1]);
        }
        return str;
    }
    /** reset */
    r = "\x1b[" + 0 + "m";
    /** reset */
    reset = "\x1b[" + 0 + "m";

    /** bold */
    b = "\x1b[" + 1 + "m";
    /** bold */
    bold = "\x1b[" + 1 + "m";

    /** italic */
    i = "\x1b[" + 3 + "m";
    /** italic */
    italic = "\x1b[" + 3 + "m";

    /** underline */
    u = "\x1b[" + 4 + "m";
    /** underline */
    underline = "\x1b[" + 4 + "m";

    /** reset underline */
    ru = "\x1b[" + 24 + "m";
    /** reset underline */
    resetUndlerine = "\x1b[" + 24 + "m";

    /** foreground color */
    cFG = class ANSI_colorForeGround {
        /** black */
        static black        = "\x1b[" + 30 + "m";
        /** red */
        static red          = "\x1b[" + 31 + "m";
        /** green */
        static green        = "\x1b[" + 32 + "m";
        /** yellow */
        static yellow       = "\x1b[" + 33 + "m";
        /** blue */
        static blue         = "\x1b[" + 34 + "m";
        /** magenta */
        static magenta      = "\x1b[" + 35 + "m";
        /** cyan */
        static cyan         = "\x1b[" + 36 + "m";
        /** lightGray */
        static lightGray    = "\x1b[" + 37 + "m";
        /** gray */
        static gray         = "\x1b[" + 90 + "m";
        /** lightRed */
        static lightRed     = "\x1b[" + 91 + "m";
        /** lightGreen */
        static lightGreen   = "\x1b[" + 92 + "m";
        /** lightYellow */
        static lightYellow  = "\x1b[" + 93 + "m";
        /** lightBlue */
        static lightBlue    = "\x1b[" + 94 + "m";
        /** lightMagenta */
        static lightMagenta = "\x1b[" + 95 + "m";
        /** lightCyan */
        static lightCyan    = "\x1b[" + 96 + "m";
        /** white */
        static white        = "\x1b[" + 97 + "m";
    }
    /** background color */
    cBG = class ANSI_colorBackGround {
        /** black */
        static black        = "\x1b[" + 40 + "m";
        /** red */
        static red          = "\x1b[" + 41 + "m";
        /** green */
        static green        = "\x1b[" + 42 + "m";
        /** yellow */
        static yellow       = "\x1b[" + 43 + "m";
        /** blue */
        static blue         = "\x1b[" + 44 + "m";
        /** magenta */
        static magenta      = "\x1b[" + 45 + "m";
        /** cyan */
        static cyan         = "\x1b[" + 46 + "m";
        /** lightGray */
        static lightGray    = "\x1b[" + 47 + "m";
        /** gray */
        static gray         = "\x1b[" + 100 + "m";
        /** lightRed */
        static lightRed     = "\x1b[" + 101 + "m";
        /** lightGreen */
        static lightGreen   = "\x1b[" + 102 + "m";
        /** lightYellow */
        static lightYellow  = "\x1b[" + 103 + "m";
        /** lightBlue */
        static lightBlue    = "\x1b[" + 104 + "m";
        /** lightMagenta */
        static lightMagenta = "\x1b[" + 105 + "m";
        /** lightCyan */
        static lightCyan    = "\x1b[" + 106 + "m";
        /** white */
        static white        = "\x1b[" + 107 + "m";
    }
}


const f = S_ANSI.use;
    console.log(f.i + "test" + f.cBG.green + f.cFG.red + "test2");

    let str = "abs \\i\>test\\r\>\\cFG.lightRed\>abc";

        str = str.parseANSI();

        console.log(str);
