let participate = confirm('Basit bir kişilik testi yaptım. Her test 10$. Katılmak ister misiniz?');

if (participate) {
    let result = "";

    let a = prompt('Kendinizi 2 kelime ile tanıtmanızı istesem. Nasıl tanımlarsınız?   \n 1= İçedönük / 2= Dışadönük')
    if (a == '1') {
        result += 'E';
    }
    else {
        alert('Lütfen cevabınızı 1 yada 2 olarak girin');

    }
    let b = prompt('Sağduyulu mu hareket edersiniz yoksa sezgilerinizle mi hareket edersiniz? \n 1= Sağduyulu / 2= Sezgiler')
    if (b == '1') {
        result += 'S';
    }
    else {
        alert('Lütfen cevabınızı 1 yada 2 olarak girin');
    }

    let c = prompt('Bir karar vereceğiniz zaman düşünceleriniz mi ön planda olur yoksa hisleriniz mi? \n 1= Düşüncüler / 2= Hisler')
    if (c == '1') {
        result += 'T';
    }
    else {
        alert('Lütfen cevabınızı 1 yada 2 olarak girin');
    }
    let d = prompt('Olaylar karşısında yargılayıcı tarafta mı olursunuz yoksa kavrayıcı / kabullenen mi? \n 1= Yargılayıcı / 2= Kavrayıcı')
    if (d == '1') {
        result += 'J';
    }
    else {
        alert('Lütfen cevabınızı 1 yada 2 olarak girin');
    }
    




    if (result == 'INTJ') {
        alert('INTJ Kişilik yapısı: Hayal gücü geniş ve stratejik düşünürlerdir. Herşey için planları vardır.');
    } else if (result == 'INTP') {
        alert('INTP Kişilik yapısı: Bilgi edinmeye yönelik hiç bitmeyen bir istek duyan yenilikçi mucitlerdir.');
    } else if (result == 'ENTJ') {
        alert('ENTJ Kişilik yapısı: Cesur, yaratıcı ve iradelidirler. Her zaman bir yol bulurlar ya da yeni bir yol yaratırlar.');
    } else if (result == 'ENTP') {
        alert('ENTP Kişilik yapısı: Entelektüel, meydan okumaya karşı koyamayan; meraklı ve esnek düşünürlerdir.');
    } else if (result == 'INFJ') {
        alert('INFJ Kişilik yapısı: Sessiz ve mistik fakat oldukça ilham verici, yorulmak bilmeyen idealistlerdir.');
    } else if (result == 'INFP') {
        alert('INFP Kişilik yapısı: Romantik, kibar ve fedakar insanlardır. Her zaman iyi bir amaca yardım etmeye isteklilerdir.');
    } else if (result == 'ENFJ') {
        alert('ENFJ Kişilik yapısı: Karizmatik ve ilham verici liderlerdir. Dinleyicilerini büyülerler.');
    } else if (result == 'ENFP') {
        alert('ENFP Kişilik yapısı: Her zaman gülümsemek için bir neden bulabilen coşkulu, yaratıcı ve sosyal özgür ruhlardır.');
    } else if (result == 'ISTJ') {
        alert('ISTJ Kişilik yapısı: Güvenilirlikleri şüphe götürmeyen, pratik ve gerçeklere dayalı düşünen bireylerdir.');
    } else if (result == 'ISFJ') {
        alert('ISFJ Kişilik yapısı: Sevdiklerini savunmaya her zaman hazır, kendini tamamen adamış ve şefkatlı korumacılardır.');
    } else if (result == 'ESTJ') {
        alert('ESTJ Kişilik yapısı: Mükemmel organizatörlerdir. Bir şeyleri yada insanları yönetmede eşsizlerdir.');
    } else if (result == 'ESFJ') {
        alert('ESFJ Kişilik yapısı: Çok ilgili, sosyal ve popüler insanlardır. Her zaman yardım etmeye heveslidirler.');
    } else if (result == 'ISTP') {
        alert('ISTP Kişilik yapısı: Her türlü aleti kullanmada usta olan, cesur ve pratik deneyicilerdir.');
    } else if (result == 'ISFP') {
        alert('ISFP Kişilik yapısı: Yeni bir şeyi araştırmaya ve deneyimlemeye daima hazır olan, rahat ve büyüleyici sanatçılardır.');
    } else if (result == 'ESTP') {
        alert('ESTP Kişilik yapısı: Akıllı ve algıları oldukça güçlü, enerjik insanlardır. Gerçekten sınırda yaşamaktan hoşlanırlar.');
    } else if (result == 'ESFP') {
        alert('ESFP Kişilik yapısı: Spontane, enerjik ve coşkulu insanlardır. Hayat onların yanında asla sıkıcı değildir.');
    } else {
        alert('Bir şeyler ters gitti :(');
    }
} else {
    alert('Para biriktirip katılmak istersen her zaman buradayım 😊');
}
