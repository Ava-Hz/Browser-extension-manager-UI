$(document).ready(function () {
  // Toggle active/inactive state with checkbox
  $(".switch input").on("change", function () {
    const $extensionCard = $(this).closest(".extension-card");

    if ($(this).is(":checked")) {
      $extensionCard.removeClass("inactive").addClass("active");
    } else {
      $extensionCard.removeClass("active").addClass("inactive");
    }
  });

  // Function to reset button colors based on theme
  function resetButtonColors() {
    const $body = $("body");
    const defaultBgColor = $body.hasClass("dark-theme") ? "#4a4a5e" : "white";
    const defaultTextColor = $body.hasClass("dark-theme")
      ? "#ffffff"
      : "#2a2a3e";

    $(".button").css({
      "background-color": defaultBgColor,
      color: defaultTextColor,
    });
  }

  // Show all extensions (both active and inactive)
  $(".all").on("click", function () {
    resetButtonColors();
    $(this).css({
      "background-color": "hsl(3, 77%, 44%)",
      color: "#ffffff",
    });
    $(".extension-card").show();
  });

  // Show only active extensions
  $(".active").on("click", function () {
    resetButtonColors();
    $(this).css({
      "background-color": "hsl(3, 77%, 44%)",
      color: "#ffffff",
    });
    $(".extension-card").hide();
    $(".switch input:checked").closest(".extension-card").show();
  });

  // Show only inactive extensions
  $(".inactive").on("click", function () {
    resetButtonColors();
    $(this).css({
      "background-color": "hsl(3, 77%, 44%)",
      color: "#ffffff",
    });
    $(".extension-card").hide();
    $(".switch input:not(:checked)").closest(".extension-card").show();
  });

  // Remove extension card
  $(".remove").on("click", function () {
    $(this).closest(".extension-card").remove();
  });

  // Toggle between light and dark theme when the mood button is clicked
  $(".mood").on("click", function () {
    const $body = $("body");
    const $moodImg = $(this).find("img");

    // Check if the current theme is light (default) or dark
    if ($body.hasClass("dark-theme")) {
      // Switch to light theme
      $body.removeClass("dark-theme");
      $moodImg.attr("src", "moon.png");
      $body.css(
        "background",
        "linear-gradient(180deg, #ebf2fc 0%, #eef8f9 100%)"
      );
      $(".extension-card").css("background-color", "white");
      $(".exten").css("color", "#2a2a3e");
      $("nav").css("background-color", "#ffffff");
      // Revert font colors to their original values
      $("nav a").css("color", "hsl(226, 25%, 17%)");
      $(".text-content h5").css("color", "");
      $(".text-content p").css("color", "");
      $(".remove").css("color", "");
    } else {
      // Switch to dark theme
      $body.addClass("dark-theme");
      $moodImg.attr("src", "./assets/images/icon-sun.svg");
      $body.css(
        "background",
        "linear-gradient(180deg, #040918 0%, #091540 100%)"
      );
      $(".extension-card").css("background-color", "#3a3a4e");
      $(".exten").css("color", "#ffffff");
      $("nav").css("background-color", "#4a4a5e");
      // Set all font colors to white
      $("nav a").css("color", "#ffffff");
      $(".text-content h5").css("color", "#ffffff");
      $(".text-content p").css("color", "#ffffff");
    }

    // Reset button colors after theme change
    resetButtonColors();
    // If a button was previously active, reapply the orange color
    $(".button.active").css({
      "background-color": "hsl(3, 77%, 44%)",
      color: "#ffffff",
    });
  });

  // Initialize the "All" button as active on page load
  $(".all").trigger("click");
});
