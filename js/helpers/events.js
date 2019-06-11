function keyDigit(key)
{
    if(key.indexOf("Key")!=-1 || key.indexOf("Numpad")!=-1 || key.indexOf("pace")!=-1 
    || key.indexOf("Back")!=-1 || key.indexOf("Quote")!=-1 || key.indexOf("Comma")!=-1
    || key.indexOf("Bracket")!=-1 || key.indexOf("ash")!=-1 || key.indexOf("Int")!=-1
    || key.indexOf("Period")!=-1 || key.indexOf("Semicolon")!=-1 || key.indexOf("Minus")!=-1
    || key.indexOf("Delete")!=-1 || key.indexOf("Digit")!=-1 || key.indexOf("Equal")!=-1)
        return true;
    else
        return false;
}