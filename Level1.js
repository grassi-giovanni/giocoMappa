export default class Level1
{
    static water = [164,164,164,164,164,164,164,164,195,164,164,164,164,164,164,164,164,164,164,164,
        164,164,164,164,164,164,164,164,194,193,193,164,193,194,195,164,164,164,164,164,
        164,164,164,164,164,164,164,164,210,209,209,164,209,193,164,164,164,164,164,164,
        164,164,164,164,164,164,164,164,209,210,211,164,164,209,164,164,164,164,164,164,
        164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,
        164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,
        164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,0,
        164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,
        164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,
        164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,164,
        164,164,164,164,164,164,164,164,164,197,164,164,164,164,164,164,164,164,164,164,
        164,164,164,164,164,164,164,180,164,164,164,164,0,164,164,0,164,164,164,164,
        249,249,250,251,0,164,164,196,180,181,164,164,164,0,0,0,164,164,164,89,
        164,164,0,164,0,164,164,212,196,197,198,0,0,0,0,0,164,164,0,0,
        164,164,0,164,0,164,0,0,212,213,214,0,0,0,0,0,164,164,146,147,
        164,164,0,0,164,164,0,0,0,0,164,0,0,0,0,0,0,0,162,163,
        164,164,0,0,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        164,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        164,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        164,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    
    static path = [0,0,0,0,0,0,0,0,161,162,163,164,0,164,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,177,178,179,0,164,164,164,164,164,0,0,0,
        0,0,0,0,0,0,0,0,180,181,182,0,164,164,164,164,0,0,0,0,
        0,0,0,0,225,226,227,228,196,197,198,229,230,231,232,0,0,0,0,0,
        0,0,0,0,241,242,243,244,212,213,214,245,246,247,248,0,0,0,0,164,
        0,0,0,0,0,164,0,164,212,213,214,164,0,164,0,0,0,164,164,164,
        0,0,0,0,0,164,0,164,212,213,214,164,164,164,0,164,164,0,164,164,
        0,0,0,0,225,226,227,228,212,213,214,229,230,231,232,164,0,0,164,164,
        0,0,0,0,241,242,243,244,212,213,214,245,246,247,248,0,0,0,0,164,
        0,0,0,0,164,164,164,164,212,213,214,164,164,0,0,0,0,0,0,164,
        0,0,0,0,164,164,164,164,212,213,214,164,164,164,0,164,0,0,0,164,
        0,0,0,0,164,164,164,164,212,213,214,164,164,164,164,164,0,0,0,164,
        87,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,89,
        103,104,135,136,137,104,104,104,104,104,104,104,104,104,104,104,104,104,104,105,
        103,104,151,152,153,104,104,104,104,104,104,104,104,104,104,104,104,104,104,105,
        103,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,105,
        103,104,104,104,104,104,104,104,104,58,59,60,60,104,104,104,104,104,104,105,
        103,104,104,104,104,104,104,104,104,74,75,76,76,104,104,104,135,136,137,105,
        103,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,151,152,153,105,
        119,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,121];
    
    static obstacles = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,250,0,0,0,252,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,250,0,0,0,252,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,250,0,0,0,252,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,250,0,0,0,252,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,250,0,0,0,252,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,250,0,0,0,252,0,0,0,0,0,0,0,0,
        250,250,251,250,250,251,250,250,0,0,0,250,250,250,250,250,250,250,250,250,
        0,138,139,138,139,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,154,155,154,155,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,
        0,168,169,168,169,0,0,0,0,0,0,0,0,0,0,0,0,184,185,0,
        0,0,0,0,0,0,0,0,157,158,159,0,0,0,0,0,0,200,201,0,
        0,0,0,0,0,0,0,0,125,126,127,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,109,110,111,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    
    }