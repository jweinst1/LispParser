//Lisp-dialect generic parser

Program
  = s:Statement* {return ["program"].concat(s);}
  
  
Statement
  = "(" n:Name _ v:Value* _ ")" _ {return [n].concat(v);}
 

Value
  = _ s:Statement {return s;}
  / _ s:String {return s;}
  / _ i:Number {return i;}
  / _ b:Bool {return b;}
  / _ n:Null {return n;}
  
  
Name
  = n:[a-zA-Z_$@+*/%~|&!?><=-]+ {return n.join("");}
  
  
String
  = '"' s:[^"]* '"' { return s.join("");}

Number
  = n:[0-9]+ { return n.join(""); }
  
Bool
  = "false" / "true"
  
Null
  = "null"

_ "whitespace"
  = [ \t\n\r]*
