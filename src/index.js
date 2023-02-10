module.exports = function toReadable (num) {

    let words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let thousands = ['thousand', 'million', 'billion', 'trillion'];
    
    if (num < 20) return words[num];
    if (num < 100) return tens[Math.floor(num / 10) - 2] + (num % 10 ? ' ' + toReadable(num % 10) : '');
    if (num < 1000) return words[Math.floor(num / 100)] + ' hundred' + (num % 100 ? (' '+toReadable(num % 100)) : '');
    
    let k = 0;
    while (num >= 1000) {
        num /= 1000;
        k++;
    }
    
    return toReadable(Math.floor(num)) + ' ' + thousands[k - 1] + (num % 1 ? ' ' + toReadable(Math.floor(num * 1000) % 1000) : '');
        
}
