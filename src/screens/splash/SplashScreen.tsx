import React, { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  Easing,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

const LogoRing = Animated.createAnimatedComponent(View);

export default function SplashScreen() {
  // --------------------------------------------------
  // Logo animations
  // --------------------------------------------------

  const leftScale = useRef(new Animated.Value(0.15)).current;
  const leftOpacity = useRef(new Animated.Value(0)).current;
  const leftRotate = useRef(new Animated.Value(-1)).current;
  const leftTranslateX = useRef(new Animated.Value(-28)).current;

  const rightScale = useRef(new Animated.Value(0.15)).current;
  const rightOpacity = useRef(new Animated.Value(0)).current;
  const rightRotate = useRef(new Animated.Value(1)).current;
  const rightTranslateX = useRef(new Animated.Value(55)).current;

  // --------------------------------------------------
  // Text animations
  // --------------------------------------------------

  const titleOpacity = useRef(new Animated.Value(0)).current;
  const titleTranslateY = useRef(new Animated.Value(18)).current;

  const taglineOpacity = useRef(new Animated.Value(0)).current;
  const taglineTranslateY = useRef(new Animated.Value(12)).current;

  const loadingOpacity = useRef(new Animated.Value(0.25)).current;

  // --------------------------------------------------
  // Start splash animation
  // --------------------------------------------------

  useEffect(() => {
    Animated.sequence([
      // LEFT LOGO
      Animated.parallel([
        Animated.timing(leftOpacity, {
          toValue: 1,
          duration: 250,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),

        Animated.spring(leftScale, {
          toValue: 1,
          friction: 7,
          tension: 70,
          useNativeDriver: true,
        }),

        Animated.timing(leftRotate, {
          toValue: 0,
          duration: 700,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),

        Animated.timing(leftTranslateX, {
          toValue: 0,
          duration: 700,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
      ]),

      // Small pause
      Animated.delay(120),

      // RIGHT LOGO
      Animated.parallel([
        Animated.timing(rightOpacity, {
          toValue: 1,
          duration: 220,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),

        Animated.spring(rightScale, {
          toValue: 1,
          friction: 7,
          tension: 70,
          useNativeDriver: true,
        }),

        Animated.timing(rightRotate, {
          toValue: 0,
          duration: 850,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),

        Animated.timing(rightTranslateX, {
          toValue: 0,
          duration: 850,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
      ]),

      // --------------------------------------------------
      // PROJECT NAME
      // --------------------------------------------------

      Animated.parallel([
        Animated.timing(titleOpacity, {
          toValue: 1,
          duration: 650,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),

        Animated.timing(titleTranslateY, {
          toValue: 0,
          duration: 650,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
      ]),

      // --------------------------------------------------
      // TAGLINE
      // --------------------------------------------------

      Animated.parallel([
        Animated.timing(taglineOpacity, {
          toValue: 1,
          duration: 700,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),

        Animated.timing(taglineTranslateY, {
          toValue: 0,
          duration: 700,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
      ]),
    ]).start();

    // --------------------------------------------------
    // Loading pulse
    // --------------------------------------------------

    Animated.loop(
      Animated.sequence([
        Animated.timing(loadingOpacity, {
          toValue: 1,
          duration: 800,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),

        Animated.timing(loadingOpacity, {
          toValue: 0.25,
          duration: 800,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  // --------------------------------------------------
  // Rotation interpolation
  // --------------------------------------------------

  const leftRotation = leftRotate.interpolate({
    inputRange: [-1, 0],
    outputRange: ["-35deg", "0deg"],
  });

  const rightRotation = rightRotate.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "35deg"],
  });

  return (
    <View style={styles.container}>
      {/* ----------------------------------------------
          DARK BACKGROUND
      ---------------------------------------------- */}

      <LinearGradient
        colors={["#03131D", "#041B26", "#020C15"]}
        locations={[0, 0.55, 1]}
        style={StyleSheet.absoluteFill}
      />

      {/* ----------------------------------------------
          TOP RIGHT GLOW
      ---------------------------------------------- */}

      <View style={styles.topGlow} />

      {/* ----------------------------------------------
          ABSTRACT WAVE BACKGROUND
      ---------------------------------------------- */}

      <View pointerEvents="none" style={styles.waveContainer}>
        <Svg
          width={width}
          height={height * 0.45}
          viewBox={`0 0 ${width} ${height * 0.45}`}
        >
          {/* upper wave */}
          <Path
            d={`
              M -20 ${height * 0.19}
              C ${width * 0.15} ${height * 0.08},
                ${width * 0.34} ${height * 0.11},
                ${width * 0.52} ${height * 0.19}

              C ${width * 0.70} ${height * 0.27},
                ${width * 0.82} ${height * 0.30},
                ${width + 20} ${height * 0.18}

              L ${width + 20} ${height * 0.48}
              L -20 ${height * 0.48}
              Z
            `}
            fill="rgba(0, 75, 84, 0.28)"
          />

          {/* green wave */}
          <Path
            d={`
              M -30 ${height * 0.28}
              C ${width * 0.10} ${height * 0.21},
                ${width * 0.23} ${height * 0.23},
                ${width * 0.38} ${height * 0.29}

              C ${width * 0.54} ${height * 0.36},
                ${width * 0.72} ${height * 0.39},
                ${width + 30} ${height * 0.28}

              L ${width + 30} ${height * 0.50}
              L -30 ${height * 0.50}
              Z
            `}
            fill="rgba(13, 93, 80, 0.34)"
          />

          {/* blue wave */}
          <Path
            d={`
              M -30 ${height * 0.36}
              C ${width * 0.12} ${height * 0.29},
                ${width * 0.28} ${height * 0.32},
                ${width * 0.44} ${height * 0.38}

              C ${width * 0.62} ${height * 0.45},
                ${width * 0.77} ${height * 0.43},
                ${width + 30} ${height * 0.35}

              L ${width + 30} ${height * 0.50}
              L -30 ${height * 0.50}
              Z
            `}
            fill="rgba(0, 63, 105, 0.42)"
          />
        </Svg>
      </View>

      {/* ----------------------------------------------
          MAIN CONTENT
      ---------------------------------------------- */}

      <View style={styles.content}>

        {/* --------------------------------------------
            LOGO
        -------------------------------------------- */}

        <View style={styles.logoContainer}>

          {/* LEFT CYAN RING */}

          <LogoRing
            style={[
              styles.ring,
              styles.leftRing,
              {
                opacity: leftOpacity,
                transform: [
                  { translateX: leftTranslateX },
                  { scale: leftScale },
                  { rotate: leftRotation },
                ],
              },
            ]}
          >
            <LinearGradient
              colors={["#00F0D0", "#00BCA8"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.ringGradient}
            />
          </LogoRing>

          {/* RIGHT BLUE RING */}

          <LogoRing
            style={[
              styles.ring,
              styles.rightRing,
              {
                opacity: rightOpacity,
                transform: [
                  { translateX: rightTranslateX },
                  { scale: rightScale },
                  { rotate: rightRotation },
                ],
              },
            ]}
          >
            <LinearGradient
              colors={["#008FFF", "#5149E8"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.ringGradient}
            />
          </LogoRing>

          {/* INNER DARK CENTER */}

          <View pointerEvents="none" style={styles.logoCenter} />
        </View>

        {/* --------------------------------------------
            PROJECT NAME
        -------------------------------------------- */}

        <Animated.View
          style={[
            styles.titleContainer,
            {
              opacity: titleOpacity,
              transform: [{ translateY: titleTranslateY }],
            },
          ]}
        >
          <Text style={styles.titleWhite}>OmniBridge </Text>
          <Text style={styles.titleGreen}>Sync</Text>
        </Animated.View>

        {/* --------------------------------------------
            TAGLINE
        -------------------------------------------- */}

        <Animated.View
          style={[
            styles.taglineContainer,
            {
              opacity: taglineOpacity,
              transform: [{ translateY: taglineTranslateY }],
            },
          ]}
        >
          <Text style={styles.tagline}>Better Conversations</Text>
          <Text style={styles.tagline}>Smarter Requirements</Text>
          <Text style={styles.tagline}>Faster Development</Text>
        </Animated.View>

        {/* --------------------------------------------
            LOADING
        -------------------------------------------- */}

        <Animated.Text
          style={[
            styles.loadingText,
            {
              opacity: loadingOpacity,
            },
          ]}
        >
          Loading...
        </Animated.Text>
      </View>

      {/* ----------------------------------------------
          SCREEN BORDER
      ---------------------------------------------- */}

      <View pointerEvents="none" style={styles.screenBorder} />
    </View>
  );
}

// =====================================================
// STYLES
// =====================================================

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#03131D",
    overflow: "hidden",
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: height * 0.035,
  },

  // ---------------------------------------------------
  // BACKGROUND
  // ---------------------------------------------------

  topGlow: {
    position: "absolute",
    width: width * 0.85,
    height: width * 0.85,
    borderRadius: width,
    right: -width * 0.38,
    top: height * 0.075,
    backgroundColor: "rgba(14, 92, 87, 0.17)",
  },

  waveContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: height * 0.055,
    height: height * 0.45,
  },

  // ---------------------------------------------------
  // LOGO
  // ---------------------------------------------------

  logoContainer: {
    width: 112,
    height: 78,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 22,
  },

  ring: {
    position: "absolute",
    width: 58,
    height: 58,
    borderRadius: 32,
    overflow: "hidden",
  },

  leftRing: {
    left: 10,
    borderWidth: 8,
    borderColor: "transparent",
  },

  rightRing: {
    right: 10,
    borderWidth: 8,
    borderColor: "transparent",
  },

  ringGradient: {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,

    borderRadius: 32,

    // Creates the visual ring
    borderWidth: 8,
    borderColor: "transparent",
  },

  logoCenter: {
    position: "absolute",
    width: 32,
    height: 32,
    borderRadius: 18,
    backgroundColor: "#061821",
  },

  // ---------------------------------------------------
  // TITLE
  // ---------------------------------------------------

  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },

  titleWhite: {
    color: "#F4F7F8",
    fontSize: 27,
    fontWeight: "700",
    letterSpacing: -0.7,
  },

  titleGreen: {
    color: "#00D6B5",
    fontSize: 27,
    fontWeight: "500",
    letterSpacing: -0.7,
  },

  // ---------------------------------------------------
  // TAGLINE
  // ---------------------------------------------------

  taglineContainer: {
    alignItems: "center",
    marginTop: 21,
  },

  tagline: {
    color: "rgba(236, 242, 244, 0.90)",
    fontSize: 13,
    lineHeight: 17,
    fontWeight: "600",
    letterSpacing: 0.15,
  },

  // ---------------------------------------------------
  // LOADING
  // ---------------------------------------------------

  loadingText: {
    position: "absolute",
    bottom: height * 0.105,

    color: "#00D8C0",

    fontSize: 9,
    fontWeight: "600",
    letterSpacing: 0.25,
  },

  // ---------------------------------------------------
  // BORDER
  // ---------------------------------------------------

  screenBorder: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,

    borderWidth: 1.5,
    borderColor: "rgba(0, 207, 193, 0.72)",

    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    borderBottomLeftRadius: 26,
    borderBottomRightRadius: 26,
  },
});