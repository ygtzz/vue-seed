export const fFormatUtcDate = function(sUtcDateString){
    return sUtcDateString.replace('T',' ').replace('Z','').replace(/-/g,'/');
}