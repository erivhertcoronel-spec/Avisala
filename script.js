function showPower(element) {

    let message = "";

    if (element === "Hangin") {

        message =
            "🌬️ Nagising ang Brilyante ng Hangin! " +
            "Taglay mo ngayon ang kapangyarihan ng kalayaan at kalangitan.";

    }

    else if (element === "Apoy") {

        message =
            "🔥 Nagising ang Brilyante ng Apoy! " +
            "Taglay mo ngayon ang lakas, tapang at init ng apoy.";

    }

    else if (element === "Tubig") {

        message =
            "🌊 Nagising ang Brilyante ng Tubig! " +
            "Taglay mo ngayon ang misteryo at kapangyarihan ng karagatan.";

    }

    else if (element === "Lupa") {

        message =
            "🌎 Nagising ang Brilyante ng Lupa! " +
            "Taglay mo ngayon ang lakas at katatagan ng mundo.";

    }

    alert(message);
}
