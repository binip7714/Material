import {AppBar,Box,Button,CssBaseline,Grid,Link,TextField,Toolbar,Typography,} from '@mui/material';
import React from 'react';
import PeopleIcon from '@mui/icons-material/People';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { Container } from '@mui/system';

const AboutUs = () => {
    return (
        <>
            <CssBaseline />
            <AppBar color="primary" position="fixed">
                <Toolbar>
                    <Grid container justifyContent="center" spacing={40} alignItems="center">
                        <Grid item>
                            <Grid container alignItems="center" spacing={2}>
                                <Grid item>
                                    <PeopleIcon/>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6">
                                        Vrit Tech
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container justifyContent="space-between" spacing={5}>
                                <Grid item>
                                    <Link component="button" variant="body2" underline="hover" color="#fff">
                                        Home
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link component="button" variant="body2" underline="hover" color="#fff">
                                        About
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link
                                        component="button"
                                        variant="body2"
                                        underline="hover"
                                        color="#fff"
                                    >
                                        Contact
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container alignItems="center">
                                <Grid item mr={2}>
                                    <TextField
                                        variant="standard"
                                        placeholder="Search"
                                        color="primary"
                                    />
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" >
                                        <SearchSharpIcon />
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <main>
                <Grid>
                    <Box
                        sx={{
                            backgroundImage:
                                'url("https://i.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4")',
                            height: '70vh',
                            backgroundSize: '100% 100%',
                        }}
                    >
                        <Grid
                            py={5}
                            container
                            justifyContent="center"
                            sx={{ height: '100%' }}
                            alignItems="center"
                        >
                        </Grid>
                    </Box>
                    <Container maxWidth="md">
                        <Grid container  justifyContent="left" py={4}>
                            <Grid item >
                                <Typography variant="h4">
                                    About Vrit Technologies.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                    <Container>
                        <Typography color="textSecondary" align="left" py={2}>
                            Vrit Technologies is believed to be one of the
                            popular providers of IT services in Nepal. The
                            company is equipped with fine infrastructure and
                            ideal technology support. Vrit Tech has a broader
                            distribution network so that the business
                            requirements of the partners can be satisfied. Our
                            primary asset is our team of talented, enthusiastic
                            and committed individuals.
                        </Typography>
                    </Container>
                    <Container>
                        <Typography color="textSecondary" align="left" py={2}>
                            Bibek and Umesh Subedi the two co-founders started
                            Vrit Technologies as an information technology
                            startup in 2019. Since the last three years, Vrit
                            technology has helped numerous startups and
                            businesses grow and scale by delivering digital
                            services such as web development, digital marketing,
                            cybersecurity solutions, IoT and business
                            automation, and more.
                        </Typography>
                    </Container>
                    <Container>
                        <Typography color="textSecondary" align="left" py={2}>
                            Our company’s vision is to be an ideal global
                            services and IT Solutions Company. We would attain
                            prominent place in the market by comprehending the
                            needs of customers and working with our partners to
                            provide solutions that real business value.
                        </Typography>
                    </Container>
                    <Container>
                        <Typography>
                        If you’re looking for any IT Support or Solutions let’s work together 😊
                        </Typography>
                    </Container>
                </Grid>
            </main>
        </>
    );
};

export default AboutUs;