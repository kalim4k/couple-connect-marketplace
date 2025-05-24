
import React from 'react';
import AppHeader from '@/components/AppHeader';
import ScreenshotGallery from '@/components/ScreenshotGallery';
import AppDescription from '@/components/AppDescription';
import BonusSection from '@/components/BonusSection';
import DataSecurity from '@/components/DataSecurity';
import RatingSection from '@/components/RatingSection';
import UserReviews from '@/components/UserReviews';
import PurchaseSection from '@/components/PurchaseSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto lg:max-w-4xl bg-white shadow-lg">
        <AppHeader />
        <ScreenshotGallery />
        <AppDescription />
        <BonusSection />
        <DataSecurity />
        <RatingSection />
        <UserReviews />
        <PurchaseSection />
      </div>
    </div>
  );
};

export default Index;
