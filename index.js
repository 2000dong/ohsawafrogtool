


alert ("正常に起動しました。")
let element = document.getElementById('textarea');
console.log(element.value);
const bn1 = "アンダー";

function Copytime() {

    var content = document.getElementById('under');

    content.select();
    document.execCommand('copy');

    alert("Copied!");
}
function clickDisplayAlert() {
  alert("ボタンがクリックされました");
  var content = document.getElementById('textarea');

  content.select();
  document.execCommand('copy');

}
function area1() {
const namae = document.getElementById("Namae")
    document.getElementById("textarea").value = ('namae');
  }

function area2() {
  document.getElementById('textarea').value
                                           += document.getElementById('Namae').value;
  document.getElementById('textarea').value
                                           += document.getElementById('anda-').value;
  document.getElementById('textarea').value
                                           += document.getElementById('hidari').value;
  document.getElementById('textarea').value
                                           += document.getElementById('under_left').value;
  document.getElementById('textarea').value
                                           += document.getElementById('migi').value;
  document.getElementById('textarea').value
	                                         += document.getElementById('under_right').value;
  document.getElementById('textarea').value
                                           += document.getElementById('kougo').value;
  document.getElementById('textarea').value
                                           += document.getElementById('under_mix').value;
  document.getElementById('textarea').value
                                           += document.getElementById('ryoute').value;
  document.getElementById('textarea').value
                                           += document.getElementById('under').value;
  document.getElementById('textarea').value
                                                                                    += document.getElementById('o-ba-').value;
  document.getElementById('textarea').value
                                                                                    += document.getElementById('hidari').value;
  document.getElementById('textarea').value
                                                                                    += document.getElementById('over_left').value;
  document.getElementById('textarea').value
                                                                                    += document.getElementById('migi').value;
  document.getElementById('textarea').value
                                         	                                          += document.getElementById('over_right').value;
  document.getElementById('textarea').value
                                                                                    += document.getElementById('kougo').value;
  document.getElementById('textarea').value
                                                                                    += document.getElementById('over_mix').value;
  document.getElementById('textarea').value
                                                                                    += document.getElementById('ryoute').value;
  document.getElementById('textarea').value
                                                                                    += document.getElementById('over').value;
  document.getElementById('textarea').value
                                                                                    += document.getElementById('neoki').value;
  document.getElementById('textarea').value
                                                                                    += document.getElementById('over_updown').value;

                                                                                    var content = document.getElementById('textarea');

                                                                                    content.select();
                                                                                    document.execCommand('copy');
                                                                                    alert ("コピーが完了しました");
}

function area3() {
  let textarea = document.getElementById('textarea');
textarea.value = 'my text'+ under ;
}
