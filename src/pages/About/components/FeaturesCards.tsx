import { Card } from '@/components/UI/Card/Card';
import { containerStyle, featureCardStyles, iconStyle, paragraphStyle, titleStyle } from './styles';
import { Typography } from '@/components/UI/Typography/Typography';
import { IconArrowGuide, IconBracketsAngle, IconFile, IconTarget } from '@tabler/icons-react';
import { useState, useEffect } from 'react';

export const FeaturesCards = () => {
    const [isLarge, setIsLarge] = useState(window.innerWidth >= 600);

    // track changes in screen size
    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 600px)");
        const handleChange = (event: MediaQueryListEvent) => setIsLarge(event.matches);
        mediaQuery.addEventListener("change", handleChange);
        setIsLarge(mediaQuery.matches);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    return (
        <div style={{...containerStyle, gridTemplateColumns: isLarge ? "1fr 1fr" : "1fr"}}>
            <Card style={featureCardStyles}>
                <IconTarget color={iconStyle.colors} style={iconStyle.style} size={iconStyle.size} />
                <Typography variant='title' style={titleStyle}>
                    Precision Scanning
                </Typography>
                <Typography variant='primary' style={paragraphStyle}>
                    Advanced algorithms detect broken links across markdown files, documentation, and code comments with pinpoint accuracy.
                </Typography>
            </Card>
            <Card style={featureCardStyles}>
                <IconFile color={iconStyle.colors} style={iconStyle.style} size={iconStyle.size} />
                <Typography variant='title' style={titleStyle}>
                    Automated Reports
                </Typography>
                <Typography variant='primary' style={paragraphStyle}>
                    Generate comprehensive reports with detailed breakdowns, fix suggestions, and priority rankings for efficient maintenance.
                </Typography>
            </Card>
            <Card style={featureCardStyles}>
                <IconArrowGuide color={iconStyle.colors} style={iconStyle.style} size={iconStyle.size} />
                <Typography variant='title' style={titleStyle}>
                    GitHub Integration
                </Typography>
                <Typography variant='primary' style={paragraphStyle}>
                    Seamlessly integrate with your GitHub workflow through Actions, webhooks, and automated pull request creation.
                </Typography>
            </Card>
            <Card style={featureCardStyles}>
                <IconBracketsAngle color={iconStyle.colors} style={iconStyle.style} size={iconStyle.size} />
                <Typography variant='title' style={titleStyle}>
                    Open Source
                </Typography>
                <Typography variant='primary' style={paragraphStyle}>
                    Completely open source and community-driven. Contribute, customize, and extend to fit your project's needs.
                </Typography>
            </Card>
        </div>
    );
}