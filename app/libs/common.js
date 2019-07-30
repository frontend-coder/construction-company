$(document).ready(function () {
	// 	$("body").niceScroll({
	// horizrailenabled:false
	// });
	// вверхнее красиво-вращающееся меню
	// 1 и 2 строка это анимация крестика
	//3 строка - слайдер вниз меню
	//слайдер вниз меню отвечает за работу мобильного меню к переносу
	$(".toggle-mnu").click(function () {
		$(this).toggleClass("on");
		$(".top-menu").slideToggle();
		return false;
	});
	$('body, .top-menu ul li a').click(function () {
		$('.hidden-mnu').hide("slow");
	});


$('.searchbutton').click(function(){
  $(this).toggleClass('active');
  $('.search-form').slideToggle();
});






// function func(e) {
//   if (e.value.indexOf(".") != '-1') {
//     e.value=e.value.substring(0, e.value.indexOf(".") + 2); // цифра 4, устанавливает количество цифр после запятой,
//                                                             //т.е. если 4, то максимум 3 цифры после запятой
//   }
// }








$('html').on('change', function() {

let dlinaPool = document.getElementById("dlina_pool").value;

if (dlinaPool == "") {
dlinaPool = 1;
}
document.getElementById("dlina_out").innerHTML = dlinaPool;

let shirinaPool = document.getElementById("shirina_pool").value;
if (shirinaPool == "") {
shirinaPool = 1;
}
document.getElementById("shirina_out").innerHTML = shirinaPool;

let glubMinPool = document.getElementById("glubmin_pool").value;
if (glubMinPool == "") {
glubMinPool = 1;
}
document.getElementById("shirinamin_out").innerHTML = glubMinPool;

let glubMaxPool = document.getElementById("glubmax_pool").value;
if (glubMaxPool == "") {
glubMaxPool = 1;
}
document.getElementById("shirinamax_out").innerHTML = glubMaxPool;


let radios = 'нет';
radios = document.getElementsByName("perehodglubiny");
for (let i = 0; i < radios.length; i++) {
if (radios[i].checked) {
let PerGlub = (radios[i].value);
document.getElementById("perbusbass_out").innerHTML = PerGlub;
}
}



let radiostype = 'скиммерный';
radiostype = document.getElementsByName("typebusseyna");
for (let it = 0; it < radiostype.length; it++) {
if (radiostype[it].checked) {
let type = (radiostype[it].value);
 document.getElementById("typebus_out").innerHTML = type;
}
}




 let radiosperexod = 'круглый';
  radiosperexod = document.getElementsByName("formabusseyna");
   for (let ip = 0; ip < radiosperexod.length; ip++) {
  if (radiosperexod[ip].checked) {
  let perex = (radiosperexod[ip].value);
  document.getElementById("formbus_out").innerHTML = perex;
 }
}

let radiosmat = 'плиткой';
radiosmat = document.getElementsByName("typecalc");
for (let imat = 0; imat < radiosmat.length; imat++) {
if (radiosmat[imat].checked) {
let mat = (radiosmat[imat].value);
document.getElementById("oblichovka_out").innerHTML = mat;
}
}






// вывод текста с бетонной и нержавеющей лесниц
let nergaveikaLwsnichaInput;
let nergaveikaLwsnichaOutput;
nergaveikaLwsnichaInput = document.getElementById('nergaveka');
if (nergaveikaLwsnichaInput.checked) {
nergaveikaLwsnichaOutput = 'нержавеющей лесницей';
document.getElementById("nerglesnicha_out").innerHTML = nergaveikaLwsnichaOutput;
}
else {
nergaveikaLwsnichaOutput = 'без нержавеющей лесницы';
document.getElementById("nerglesnicha_out").innerHTML = nergaveikaLwsnichaOutput;
}

let betonLwsnichaInput;
let betonLwsnichaOutput;
betonLwsnichaInput = document.getElementById('betonnastep');
if (betonLwsnichaInput.checked) {
betonLwsnichaOutput = 'бетонной лесницей';
document.getElementById("betonlesnicha_out").innerHTML = betonLwsnichaOutput;
}
else {
betonLwsnichaOutput = 'без бетонной лесницы';
document.getElementById("betonlesnicha_out").innerHTML = betonLwsnichaOutput;
}


















// вывод текста ПОДОГРЕВ

let podogrevVodyPool;
let podogrevVodyPoolOutput;
let PodogrevPoolCost;
podogrevVodyPool = document.getElementById('podogravpool');
if (podogrevVodyPool.checked) {
podogrevVodyPoolOutput = 'подогрев воды бассейна';
PodogrevPoolCost = 11897;
}
else {
podogrevVodyPoolOutput = 'без подогрева воды бассейна';
PodogrevPoolCost = 0;
};
document.getElementById("podogrevvody_out").innerHTML = podogrevVodyPoolOutput;
document.getElementById("podogrevvodycost_out").innerHTML = PodogrevPoolCost;
















});

















// var SlognyBussein = document.getElementById('formamains');
// if (SlognyBussein.checked) {
// formaBaseins = 1.3;
// }

// var KruglyBussein =document.getElementById('formaaround');
// if (KruglyBussein.checked) {
// formaBaseins = 1.1;
// }

// var PriamougBussein = document.getElementById('formapramougolna');
// if (PriamougBussein.checked) {
// formaBaseins = 1.0;
// }




// // вывод текста ПОДСВЕТКИ

// var chboxpodsvetka;
// var chboxsumpodsvetka;
// chboxpodsvetka=document.getElementById('podsvetka');
// if (chboxpodsvetka.checked) {
// chboxsumpodsvetka = 'подводное освещение галогеновыми светильниками,';
// document.getElementById("podvpodsvetka_out").innerHTML = chboxsumpodsvetka; }
// else {
// chboxsumpodsvetka = 'без подводного освещения галогеновыми светильниками,';
// document.getElementById("podvpodsvetka_out").innerHTML = chboxsumpodsvetka;
// }
// // цена установки подсветки
// var PodsvetaBaseinCost;
// var PodsvetaBasein = document.getElementById('podsvetka');
// if (PodsvetaBasein.checked) {
//  PodsvetaBaseinCost = 3335;
// } else {
// PodsvetaBaseinCost = 0;
// }








// // вывод текста ОБРАБОТКА
// // стоимость установки озоновой обработки воды
// var OzonObrabotBaseinCost;
// var OzonObrabotBasein = document.getElementById('obrabotkawather');
// if (OzonObrabotBasein.checked) {
// OzonObrabotBaseinCost = 11749;
// } else {
// OzonObrabotBaseinCost = 0;
// }

// var chboxObrabotka;
// var chboxsumObrabotka;
// chboxObrabotka=document.getElementById('obrabotkawather');
// if (chboxObrabotka.checked) {
// chboxsumObrabotka = 'озоновое кондиционирование воды,';
// document.getElementById("ozonobrabotka_out").innerHTML = chboxsumObrabotka; }
// else {
// chboxsumObrabotka = 'без озонового кондиционирования воды,';
// document.getElementById("ozonobrabotka_out").innerHTML = chboxsumObrabotka;
// }

// // вывод текста ПРОТИВОТОК
// // стоимость установки противотока
// var ProtivotokBaseinCost;
// var ProtivotokBasein = document.getElementById('protivotok');
// if (ProtivotokBasein.checked) {
// ProtivotokBaseinCost = 143510;
// } else {
// ProtivotokBaseinCost = 0;
// }

// var chboxProtivotok;
// var chboxsumProtivotok;
// chboxProtivotok=document.getElementById('protivotok');
// if (chboxProtivotok.checked) {
// chboxsumProtivotok = 'противотоком,';
// document.getElementById("protivot_out").innerHTML = chboxsumProtivotok; }
// else {
// chboxsumProtivotok = 'без противотока,';
// document.getElementById("protivot_out").innerHTML = chboxsumProtivotok;
// }

// // вывод текста ВОДОПАД
// // стоимость водопада для бассейна
// var VodopadBaseinCost;
// var VodopadBasein = document.getElementById('vodopad');
// if (VodopadBasein.checked) {
// VodopadBaseinCost = 34012;
// } else {
// VodopadBaseinCost = 0;
// }

// var chboxVodopad;
// var chboxsumVodopad;
// chboxVodopad=document.getElementById('vodopad');
// if (chboxVodopad.checked) {
// chboxsumVodopad = 'водопад,';
// document.getElementById("vodopad_out").innerHTML = chboxsumVodopad; }
// else {
// chboxsumVodopad = 'без водопада,';
// document.getElementById("vodopad_out").innerHTML = chboxsumVodopad;
// }

// // вывод текста ГИДРОМАССАЖ
// // стоимость установки по гидромассажу
// var GidromasageBaseinCost;
// var GidromasageBasein = document.getElementById('gidromassage');
// if (GidromasageBasein.checked) {
//  GidromasageBaseinCost = 28118;
// } else {
// GidromasageBaseinCost = 0;
// }

// var chboxGidro;
// var chboxsumGidro;
// chboxGidro=document.getElementById('gidromassage');
// if (chboxGidro.checked) {
// chboxsumGidro = 'гидромассаж,';
// document.getElementById("gidro_out").innerHTML = chboxsumGidro; }
// else {
// chboxsumGidro = 'без гидромассажа,';
// document.getElementById("gidro_out").innerHTML = chboxsumGidro;
// }

// // вывод текста АЭРОМАССАЖ
// // стоимость установки по аэромассажу

// var AeroMasageBaseinCost;
// var AeroMasageBasein = document.getElementById('aeromasage');
// if (AeroMasageBasein.checked) {
// AeroMasageBaseinCost = 28359;
// } else {
// AeroMasageBaseinCost = 0;
// }

// var chboxAero;
// var chboxsumAero;
// chboxAero=document.getElementById('aeromasage');
// if (chboxAero.checked) {
// chboxsumAero = 'аэромасаж.';
// document.getElementById("aero_out").innerHTML = chboxsumAero; }
// else {
// chboxsumAero = 'без аэромасажа.';
// document.getElementById("aero_out").innerHTML = chboxsumAero;
// }

// // var summ = ((((2 * (minGlubina * dlinaBasein) + (minGlubina * shirinaBasein) + (dlinaBasein * shirinaBasein))) * skimernyIndex) * formaBaseins) ;
//  // цена плитки за квадратный метр
// // var CenaPlitka = 3500;
// // var CenaMozaika = 3500;
// // var CenaPolip = 3500;

// // var summObl;
// // var PolipropObl = document.getElementById('poliproinput');
// // if (PolipropObl.checked) {
// // summObl = summ * CenaPolip;
// // }
// // var PlitkaObl =document.getElementById('plitkainput');
// // if (PlitkaObl.checked) {
// // summObl = summ * CenaPlitka;
// // }
// // var MozaikaObl =document.getElementById('mozaikainput');
// // if (MozaikaObl.checked) {
// // summObl = summ * CenaMozaika;
// // }
// // цена взависимости от площади стенок бассейна с ученом формы бассейна - так было в ТЗ, если площать стенок от 0 до 5,99 м квадоратных цена материала
// // составляет 3500 если площать материала 6 и более(в реальности больше 5.9999999) цена материала 4200 за метр квадратный

// var summObl;
// var summ = ((((2 * (minGlubina * dlinaBasein) + (minGlubina * shirinaBasein) + (dlinaBasein * shirinaBasein))) * skimernyIndex) * formaBaseins) ;
// if (summ < 5.9999999) {
// summObl = summ * 3500;
// } else {
//   summObl = summ * 4200;

// }



// // стоимость бетонной и нержавеющей лесницы
// // стоимость нержавеющей лесницы для бассейна
// var NergLesnCost;
// var NergaveikaLesnicha =document.getElementById('nergaveka');
// if (NergaveikaLesnicha.checked) {
// NergLesnCost = 6938;
// } else {
//   NergLesnCost = 0;
//   }

// // стоимость бетонной лесницы для бассейна
// var BetonLesnCost;
// var BetonayaLesnicha =document.getElementById('betonnastep');
// if (BetonayaLesnicha.checked) {
// BetonLesnCost = 18678;
// } else {
//   BetonLesnCost = 0;
// }

// var allSumm = summObl + filtrCosting + BetonLesnCost + NergLesnCost + PodsvetaBaseinCost + PodogrevBaseinCost + OzonObrabotBaseinCost + ProtivotokBaseinCost + VodopadBaseinCost + GidromasageBaseinCost + AeroMasageBaseinCost;
// allSumm = Math.ceil(allSumm);
// allSumm = allSumm.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
// document.getElementById("costing_proect").innerHTML =  allSumm;
// var out = $("#costing_proect").text();
// $("#costing_peredat").append("<input type='hidden' name='costing_peredat' value='" + out + "'><br>");

// });







































	//Ajax push mesege http://api.jquery.com/jquery.ajax/
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function () {
			$(".forms-calldecor .success").addClass("active");
			setTimeout(function () {
				// Done Functions
				$(".forms-calldecor .success").removeClass("active");
				th.trigger("reset");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});
	//castom code









});