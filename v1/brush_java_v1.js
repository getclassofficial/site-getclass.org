     //<![CDATA[
  (function() {
    // CommonJS
    typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter: null;
    function Brush() {
        var keywords = 'abstract assert boolean break byte case catch char class const ' +
            'continue default do double else enum extends ' +
            'false final finally float for goto if implements import ' +
            'instanceof int interface long native new null ' +
            'package private protected public return ' +
            'short static strictfp super switch synchronized this throw throws true ' +
            'transient try void volatile while';
 var classes = 'ArrayList Base64 Calendar GregorianCalendar Date EnumMap EnumSet HashMap HashSet Hashtable LinkedList Optional PriorityQueue Properties ResourceBundle TreeMap TreeSet ' +
            'Stream ' ;
	     var methods = 'map flatMap forEach out' ;
        this.regexList = [{
                regex: SyntaxHighlighter.regexLib.singleLineCComments,
                css: 'comments'
            }, // one line comments
            {
                regex: /\/\*([^\*][\s\S]*)?\*\//gm,
                css: 'comments'
            }, // multiline comments
            {
                regex: /\/\*(?!\*\/)\*[\s\S]*?\*\//gm,
                css: 'preprocessor'
            }, // documentation comments
            {
                regex: SyntaxHighlighter.regexLib.doubleQuotedString,
                css: 'string'
            }, // strings
            {
                regex: SyntaxHighlighter.regexLib.singleQuotedString,
                css: 'string'
            }, // strings
            {
                regex: /\b([\d]+(\.[\d]+)?|0x[a-f0-9]+)\b/gi,
                css: 'value'
            }, // numbers
            {
                regex: /(?!\@interface\b)\@[\$\w]+\b/g,
                css: 'color1'
            }, // annotation @anno
            {
                regex: /\@interface\b/g,
                css: 'color2'
            }, // @interface keyword
			/* {
                regex: /\.([0-9a-zA-Z]+)?\(/g,
                css: 'color2'
            }, // @interface keyword */
            {
                regex: new RegExp(this.getKeywords(keywords), 'gm'),
                css: 'keyword'
            }, // java keyword
 			{
                regex: new RegExp(this.getKeywords(classes), 'gm'),
                css: 'colorClass'
            }, // java classes
			  {
                regex: new RegExp(this.getKeywords(methods), 'gm'),
                css: 'colorMethod'
            } // java methods
        ];
        this.forHtmlScript({
            left: /(&lt;|<)%[@!=]?/g,
            right: /%(&gt;|>)/g
        });
    };
    Brush.prototype = new SyntaxHighlighter.Highlighter();
    Brush.aliases = ['java'];
    SyntaxHighlighter.brushes.Java = Brush;
    // CommonJS
    typeof(exports) != 'undefined' ? exports.Brush = Brush: null;
})();
//]]> 
