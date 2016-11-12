export function fFormatUtcDate(sUtcDateString){
    return sUtcDateString.replace('T',' ').replace('Z','').replace(/-/g,'/');
}