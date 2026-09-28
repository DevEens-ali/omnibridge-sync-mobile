# omnibridge-sync-mobile
Mobile application for AI-Powered OmniBridge Sync, built with React Native.

#Complete Project Structure

OmniBridgeSync/
│
├── android/
│   ├── app/
│   ├── gradle/
│   ├── build.gradle
│   ├── settings.gradle
│   └── ...
│
├── ios/
│   └── ...
│
├── src/
│   │
│   ├── assets/
│   │   ├── images/
│   │   │   ├── logo.png
│   │   │   ├── onboarding.png
│   │   │   └── illustrations/
│   │   │
│   │   ├── icons/
│   │   └── fonts/
│   │
│   ├── components/
│   │   │
│   │   ├── common/
│   │   │   ├── OBButton.tsx
│   │   │   ├── OBTextInput.tsx
│   │   │   ├── OBCard.tsx
│   │   │   ├── OBAvatar.tsx
│   │   │   ├── OBChip.tsx
│   │   │   ├── OBModal.tsx
│   │   │   ├── OBLoader.tsx
│   │   │   └── OBEmptyState.tsx
│   │   │
│   │   ├── navigation/
│   │   │   ├── BottomTab.tsx
│   │   │   ├── Header.tsx
│   │   │   └── DrawerMenu.tsx
│   │   │
│   │   ├── meeting/
│   │   │   ├── VideoWindow.tsx
│   │   │   ├── MeetingControls.tsx
│   │   │   ├── ParticipantCard.tsx
│   │   │   └── LiveIndicator.tsx
│   │   │
│   │   ├── requirements/
│   │   │   ├── RequirementCard.tsx
│   │   │   ├── RequirementStatus.tsx
│   │   │   ├── RequirementTypeChip.tsx
│   │   │   └── ClarificationBox.tsx
│   │   │
│   │   └── prototype/
│   │       ├── PrototypeCard.tsx
│   │       ├── PrototypePreview.tsx
│   │       └── PrototypeComponent.tsx
│   │
│   ├── screens/
│   │   │
│   │   ├── splash/
│   │   │   └── SplashScreen.tsx
│   │   │
│   │   ├── onboarding/
│   │   │   └── OnboardingScreen.tsx
│   │   │
│   │   ├── auth/
│   │   │   ├── LoginScreen.tsx
│   │   │   └── SignupScreen.tsx
│   │   │
│   │   ├── role/
│   │   │   └── RoleSelectionScreen.tsx
│   │   │
│   │   ├── dashboard/
│   │   │   ├── DeveloperDashboard.tsx
│   │   │   └── ClientDashboard.tsx
│   │   │
│   │   ├── projects/
│   │   │   ├── ProjectsScreen.tsx
│   │   │   ├── CreateProjectScreen.tsx
│   │   │   └── ProjectDetailsScreen.tsx
│   │   │
│   │   ├── meeting/
│   │   │   ├── MeetingScreen.tsx
│   │   │   ├── ClientMeetingScreen.tsx
│   │   │   └── DeveloperMeetingScreen.tsx
│   │   │
│   │   ├── requirements/
│   │   │   ├── RequirementsScreen.tsx
│   │   │   └── RequirementDetailsScreen.tsx
│   │   │
│   │   ├── prototype/
│   │   │   ├── PrototypeScreen.tsx
│   │   │   └── PrototypeDetailsScreen.tsx
│   │   │
│   │   ├── visual/
│   │   │   └── VisualExplanationScreen.tsx
│   │   │
│   │   ├── memory/
│   │   │   ├── ProjectMemoryScreen.tsx
│   │   │   ├── MeetingHistoryScreen.tsx
│   │   │   └── VersionHistoryScreen.tsx
│   │   │
│   │   └── settings/
│   │       ├── SettingsScreen.tsx
│   │       ├── ProfileScreen.tsx
│   │       └── AppearanceScreen.tsx
│   │
│   ├── navigation/
│   │   ├── AppNavigator.tsx
│   │   ├── AuthNavigator.tsx
│   │   ├── MainNavigator.tsx
│   │   └── navigationTypes.ts
│   │
│   ├── services/
│   │   │
│   │   ├── api/
│   │   │   ├── apiClient.ts
│   │   │   ├── authApi.ts
│   │   │   ├── projectApi.ts
│   │   │   ├── meetingApi.ts
│   │   │   └── requirementApi.ts
│   │   │
│   │   ├── auth/
│   │   │   └── authService.ts
│   │   │
│   │   ├── meeting/
│   │   │   ├── cameraService.ts
│   │   │   ├── microphoneService.ts
│   │   │   └── meetingService.ts
│   │   │
│   │   ├── speech/
│   │   │   ├── speechToText.ts
│   │   │   ├── audioRecorder.ts
│   │   │   └── captionService.ts
│   │   │
│   │   └── storage/
│   │       └── storageService.ts
│   │
│   ├── ai/
│   │   │
│   │   ├── requirements/
│   │   │   ├── requirementEngine.ts
│   │   │   ├── requirementExtractor.ts
│   │   │   ├── requirementClassifier.ts
│   │   │   ├── ambiguityDetector.ts
│   │   │   ├── missingInfoDetector.ts
│   │   │   ├── conflictDetector.ts
│   │   │   └── clarificationGenerator.ts
│   │   │
│   │   ├── prototype/
│   │   │   ├── prototypeGenerator.ts
│   │   │   ├── uiMapper.ts
│   │   │   └── componentRenderer.ts
│   │   │
│   │   └── visual/
│   │       ├── visualExplanationEngine.ts
│   │       └── diagramGenerator.ts
│   │
│   ├── store/
│   │   ├── authStore.ts
│   │   ├── projectStore.ts
│   │   ├── meetingStore.ts
│   │   └── requirementStore.ts
│   │
│   ├── types/
│   │   ├── auth.types.ts
│   │   ├── project.types.ts
│   │   ├── meeting.types.ts
│   │   ├── requirement.types.ts
│   │   ├── prototype.types.ts
│   │   └── navigation.types.ts
│   │
│   ├── theme/
│   │   ├── colors.ts
│   │   ├── typography.ts
│   │   ├── spacing.ts
│   │   ├── shadows.ts
│   │   └── theme.ts
│   │
│   ├── utils/
│   │   ├── validation.ts
│   │   ├── dateUtils.ts
│   │   ├── formatters.ts
│   │   └── constants.ts
│   │
│   └── config/
│       ├── environment.ts
│       └── appConfig.ts
│
├── App.tsx
├── index.js
├── package.json
├── tsconfig.json
├── babel.config.js
├── metro.config.js
├── .gitignore
└── README.md
