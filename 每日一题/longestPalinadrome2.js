/*
 * @PackageName: 
 * @Description: 
 * @Author: Man
 * @Date: 2022-06-21 11:20:59
 * @LastModifiedBy: git config user.name
 * @LastEditTime: 2022-06-21 11:21:12
 */
let longestPalindrome = function(s){
    let len = s.length;
    // 处理特殊情况，如果是单个字符一定是回文字符串
    if(len<2){
        return s
    }
    let maxLength = 1;
    let begin = 0;
    let dp = new Array(len);
    // 初始化
    for(let i=0;i<len;i++){
        dp[i]=new Array(len);
    }
    for(let i=0;i<len;i++){
        dp[i][i] = true
    }
    // 对长度等于2的进行初始化
    for(let i=0;i<len-1;i++){
        if(s[i]===s[i+1]){
            dp[i][i+1] = true;
            begin = i;
            maxLength = 2;
        }else{
            dp[i][i+1] = false;
        }
    }
    // 对于长度3以上的字符串进行处理
    for(let j=2;j<len;j++){
        for(let i=0;i<j-1;i++){
            dp[i][j] = (s[i]===s[j])&&dp[i+1][j-1]
            if(dp[i][j]&&j-i+1>maxLength){
                begin = i;
                maxLength = j-i+1;
            }
        }
    }
    return s.slice(begin,begin+maxLength);
}
console.log(longestPalindrome('civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth'))