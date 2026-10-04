OmniBridgeSync/
│
├── assets/
│   ├── images/
│   │   ├── logo.png
│   │   ├── splash.png
│   │   ├── onboarding/
│   │   │   ├── communication.png
│   │   │   ├── requirements.png
│   │   │   └── prototype.png
│   │   └── illustrations/
│   │       ├── developer.png
│   │       ├── client.png
│   │       └── empty-state.png
│   │
│   ├── icons/
│   └── fonts/
│
├── src/
│   │
│   ├── components/
│   │   │
│   │   ├── common/
│   │   │   ├── OBButton.tsx
│   │   │   ├── OBInput.tsx
│   │   │   ├── OBCard.tsx
│   │   │   ├── OBAvatar.tsx
│   │   │   ├── OBBadge.tsx
│   │   │   ├── OBLoader.tsx
│   │   │   ├── OBModal.tsx
│   │   │   └── OBEmptyState.tsx
│   │   │
│   │   ├── navigation/
│   │   │   ├── BottomNavigation.tsx
│   │   │   ├── AppHeader.tsx
│   │   │   └── BackButton.tsx
│   │   │
│   │   ├── project/
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── ProjectStatus.tsx
│   │   │   └── ProjectHeader.tsx
│   │   │
│   │   ├── meeting/
│   │   │   ├── VideoWindow.tsx
│   │   │   ├── SelfPreview.tsx
│   │   │   ├── MeetingControls.tsx
│   │   │   ├── LiveIndicator.tsx
│   │   │   ├── LiveCaption.tsx
│   │   │   └── AudioVisualizer.tsx
│   │   │
│   │   ├── requirement/
│   │   │   ├── RequirementCard.tsx
│   │   │   ├── RequirementStatus.tsx
│   │   │   ├── RequirementType.tsx
│   │   │   ├── ConfidenceIndicator.tsx
│   │   │   └── ClarificationBox.tsx
│   │   │
│   │   ├── prototype/
│   │   │   ├── PrototypeContainer.tsx
│   │   │   ├── PrototypeNavbar.tsx
│   │   │   ├── PrototypeCard.tsx
│   │   │   ├── PrototypeButton.tsx
│   │   │   ├── PrototypeInput.tsx
│   │   │   └── PrototypeBottomNav.tsx
│   │   │
│   │   └── visual/
│   │       ├── DiagramCard.tsx
│   │       ├── FlowNode.tsx
│   │       └── ConnectionLine.tsx
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
│   │   │   ├── SignupScreen.tsx
│   │   │   ├── ForgotPasswordScreen.tsx
│   │   │   └── VerificationScreen.tsx
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
│   │   │   ├── PreMeetingScreen.tsx
│   │   │   ├── DeveloperMeetingScreen.tsx
│   │   │   └── ClientMeetingScreen.tsx
│   │   │
│   │   ├── requirements/
│   │   │   ├── RequirementsScreen.tsx
│   │   │   ├── RequirementDetailsScreen.tsx
│   │   │   ├── ClarificationScreen.tsx
│   │   │   └── UnderstandingScreen.tsx
│   │   │
│   │   ├── prototype/
│   │   │   ├── PrototypeScreen.tsx
│   │   │   ├── PrototypeReviewScreen.tsx
│   │   │   └── PrototypeVersionsScreen.tsx
│   │   │
│   │   ├── visual/
│   │   │   ├── VisualExplanationScreen.tsx
│   │   │   └── ArchitectureRecommendationScreen.tsx
│   │   │
│   │   ├── memory/
│   │   │   ├── ProjectMemoryScreen.tsx
│   │   │   ├── MeetingHistoryScreen.tsx
│   │   │   └── VersionHistoryScreen.tsx
│   │   │
│   │   ├── summary/
│   │   │   └── MeetingSummaryScreen.tsx
│   │   │
│   │   └── settings/
│   │       ├── ProfileScreen.tsx
│   │       ├── SettingsScreen.tsx
│   │       ├── AppearanceScreen.tsx
│   │       └── NotificationsScreen.tsx
│   │
│   ├── navigation/
│   │   ├── AppNavigator.tsx
│   │   ├── AuthNavigator.tsx
│   │   ├── MainNavigator.tsx
│   │   ├── DeveloperNavigator.tsx
│   │   ├── ClientNavigator.tsx
│   │   └── navigationTypes.ts
│   │
│   ├── services/
│   │   │
│   │   ├── firebase/
│   │   │   ├── firebaseConfig.ts
│   │   │   ├── authService.ts
│   │   │   ├── userService.ts
│   │   │   ├── projectService.ts
│   │   │   ├── meetingService.ts
│   │   │   ├── requirementService.ts
│   │   │   └── storageService.ts
│   │   │
│   │   ├── camera/
│   │   │   ├── cameraService.ts
│   │   │   └── cameraPermissions.ts
│   │   │
│   │   ├── audio/
│   │   │   ├── audioRecorder.ts
│   │   │   ├── audioPermissions.ts
│   │   │   └── audioPlayer.ts
│   │   │
│   │   ├── speech/
│   │   │   ├── speechToText.ts
│   │   │   ├── captionService.ts
│   │   │   └── transcriptService.ts
│   │   │
│   │   └── meeting/
│   │       ├── meetingService.ts
│   │       ├── participantService.ts
│   │       └── connectionService.ts
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
│   │   │   ├── uiSpecification.ts
│   │   │   ├── componentMapper.ts
│   │   │   └── prototypeEngine.ts
│   │   │
│   │   └── visual/
│   │       ├── visualExplanationEngine.ts
│   │       └── diagramEngine.ts
│   │
│   ├── ml/
│   │   ├── dataset/
│   │   │   ├── requirements.json
│   │   │   ├── ambiguity.json
│   │   │   └── classification.json
│   │   │
│   │   ├── preprocessing/
│   │   │   └── textPreprocessor.ts
│   │   │
│   │   ├── models/
│   │   │   └── modelConfig.ts
│   │   │
│   │   └── evaluation/
│   │       └── evaluationMetrics.ts
│   │
│   ├── mock/
│   │   ├── users.ts
│   │   ├── projects.ts
│   │   ├── meetings.ts
│   │   ├── requirements.ts
│   │   ├── prototypes.ts
│   │   └── captions.ts
│   │
│   ├── store/
│   │   ├── authStore.ts
│   │   ├── projectStore.ts
│   │   ├── meetingStore.ts
│   │   ├── requirementStore.ts
│   │   └── prototypeStore.ts
│   │
│   ├── types/
│   │   ├── auth.types.ts
│   │   ├── user.types.ts
│   │   ├── project.types.ts
│   │   ├── meeting.types.ts
│   │   ├── requirement.types.ts
│   │   ├── prototype.types.ts
│   │   ├── transcript.types.ts
│   │   └── visual.types.ts
│   │
│   ├── theme/
│   │   ├── colors.ts
│   │   ├── typography.ts
│   │   ├── spacing.ts
│   │   ├── radius.ts
│   │   ├── shadows.ts
│   │   └── theme.ts
│   │
│   ├── utils/
│   │   ├── validation.ts
│   │   ├── formatters.ts
│   │   ├── dateUtils.ts
│   │   └── constants.ts
│   │
│   └── config/
│       ├── environment.ts
│       └── appConfig.ts
│
├── App.tsx
├── app.json
├── package.json
├── tsconfig.json
├── babel.config.js
├── metro.config.js
├── .env.example
├── .gitignore
└── README.md
