function Average() {
    var Physical = prompt('Physical');
    var Chemistry = prompt('Chemistry');
    var Biological = prompt('Biological');
    Average = (Physical - -Chemistry - -Biological)/3;
    Sum = Physical - -Chemistry - -Biological;
    document.write("Sum = " + Sum);
    document.write('<br/>');
    document.write("Aver = " + Average);
}