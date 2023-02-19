import React from 'react';
import Footer from './Footer';
import ReadingHeader from '@/components/ReadingHeader';

function ReadingLayout({ children }: any) {
    return (
        <div>
            <ReadingHeader />
              {children}
            <Footer />
        </div>
    );
}

export default ReadingLayout;