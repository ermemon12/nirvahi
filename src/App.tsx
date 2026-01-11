import React, { useState } from 'react';
import { AppState } from './types';
import { LoginScreen } from './components/Onboarding';
import { RegistrationScreen } from './components/RegistrationScreen';
import { VerifyIdScreen } from './components/VerifyIdScreen';
import { VerifyingProcessScreen } from './components/VerifyingProcessScreen';
import { Dashboard } from './components/Dashboard';
import { CreateRide } from './components/CreateRide';
import { FindRide } from './components/FindRide';
import { RideDetails } from './components/RideDetails';
import { Payment } from './components/Payment';
import { RideInProgress } from './components/RideInProgress';
import { RateRide } from './components/RateRide';

const App: React.FC = () => {
  const [currentState, setCurrentState] = useState<AppState>(AppState.LOGIN);

  const navigateTo = (state: AppState) => {
    setCurrentState(state);
  };

  const renderCurrentState = () => {
    switch (currentState) {
      case AppState.LOGIN:
        return (
          <LoginScreen
            onNext={() => navigateTo(AppState.DASHBOARD)}
            onRegister={() => navigateTo(AppState.REGISTER)}
          />
        );

      case AppState.REGISTER:
        return (
          <RegistrationScreen
            onNext={() => navigateTo(AppState.VERIFY_ID)} // Navigate to VerifyIdScreen
            onBack={() => navigateTo(AppState.LOGIN)} // Optional back button
          />
        );

      case AppState.VERIFY_ID:
        return (
          <VerifyIdScreen
            onNext={() => navigateTo(AppState.VERIFYING)}
            onBack={() => navigateTo(AppState.REGISTER)} // Optional back
          />
        );

      case AppState.VERIFYING:
        return <VerifyingProcessScreen onNext={() => navigateTo(AppState.DASHBOARD)} />;

      case AppState.DASHBOARD:
        return (
          <Dashboard
            onCreateRide={() => navigateTo(AppState.CREATE_RIDE)}
            onFindRide={() => navigateTo(AppState.FIND_RIDE)}
          />
        );

      case AppState.CREATE_RIDE:
        return (
          <CreateRide
            onBack={() => navigateTo(AppState.DASHBOARD)}
            onPublish={() => {
              alert('Ride Published Successfully!');
              navigateTo(AppState.DASHBOARD);
            }}
          />
        );

      case AppState.FIND_RIDE:
        return (
          <FindRide
            onBack={() => navigateTo(AppState.DASHBOARD)}
            onSelectRide={() => navigateTo(AppState.RIDE_DETAILS)}
          />
        );

      case AppState.RIDE_DETAILS:
        return (
          <RideDetails
            onBack={() => navigateTo(AppState.FIND_RIDE)}
            onRequestJoin={() => navigateTo(AppState.PAYMENT)}
          />
        );

      case AppState.PAYMENT:
        return (
          <Payment
            onBack={() => navigateTo(AppState.RIDE_DETAILS)}
            onPay={() => navigateTo(AppState.RIDE_IN_PROGRESS)}
          />
        );

      case AppState.RIDE_IN_PROGRESS:
        return <RideInProgress onRideEnd={() => navigateTo(AppState.RATE_RIDE)} />;

      case AppState.RATE_RIDE:
        return (
          <RateRide
            onBack={() => navigateTo(AppState.DASHBOARD)}
            onSubmit={() => {
              alert('Thank you for your feedback!');
              navigateTo(AppState.DASHBOARD);
            }}
          />
        );

      default:
        return (
          <LoginScreen
            onNext={() => navigateTo(AppState.DASHBOARD)}
            onRegister={() => navigateTo(AppState.REGISTER)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-purple-100 selection:text-purple-900">
      <div className="flex-1 w-full mx-auto transition-all duration-500">{renderCurrentState()}</div>
    </div>
  );
};

export default App;
