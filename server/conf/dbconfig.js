var config = module.exports = {};
config.ftsdb = {
    user: 'FTSUser',
    password: 'FTSUser',
    server: '10.10.5.45',
    database: 'FTS',
    pool: {
        max: 100,
        min: 0,
        idleTimeoutMillis: 30000
    }
};

config.pensiondb = {
    user: 'pensionuser',
    password: 'pensionuser',
    server: 'FMSMF-DB01', 
    database: 'Pension',
    pool: {
        max: 100,
        min: 0,
        idleTimeoutMillis: 30000
    }
};
config.scandocdb = {
    user: 'FTSScanUser',
    password: 'FTSScanUser',
    server: 'FMSMF-DB01', 
    database: 'FTSDocScan',
    pool: {
        max: 100,
        min: 0,
        idleTimeoutMillis: 30000
    }
};