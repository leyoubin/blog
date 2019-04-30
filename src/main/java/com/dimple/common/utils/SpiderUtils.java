package com.dimple.common.utils;

import com.dimple.common.constant.CachePrefix;
import com.dimple.common.utils.spring.SpringUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ValueOperations;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

/**
 * @className: SpiderUtil
 * @description: 爬虫工具类
 * @auther: Dimple
 * @date: 01/14/19 20:57
 * @version: 1.0
 */
public class SpiderUtils {

    private static final String KEY = CachePrefix.SPIDER + "list";

    public static String parseUserAgent(String userAgent) {
        if (StringUtils.isBlank(userAgent)) {
            return null;
        }
        Map<String, String> spiderList = listSpider();
        for (Map.Entry<String, String> entry : spiderList.entrySet()) {
            String spiderSign = entry.getKey();
            if (userAgent.contains(spiderSign) || userAgent.equalsIgnoreCase(spiderSign) || userAgent.toLowerCase().contains(spiderSign.toLowerCase())) {
                return entry.getValue();
            }
        }
        return null;
    }

    private static Map<String, String> listSpider() {
        RedisTemplate redisTemplate = SpringUtils.getBean("redisTemplate");
        ValueOperations<String, Map<String, String>> valueOperations = redisTemplate.opsForValue();
        if (redisTemplate.hasKey(KEY)) {
            return valueOperations.get(KEY);
        }
        Map<String, String> spider = new HashMap<>();
        spider.put("Baiduspider-image", "百度图片搜索");
        spider.put("Baiduspider-video", "百度视频搜索");
        spider.put("Baiduspider-news", "百度新闻搜索");
        spider.put("Baiduspider-favo", "百度搜藏");
        spider.put("Baiduspider-cpro", "百度联盟");
        spider.put("Baiduspider-sfkr", "百度竞价蜘蛛");
        spider.put("Baiduspider-ads", "百度商务搜索");
        spider.put("Baidu-YunGuanCe", "百度云观测");
        spider.put("Baiduspider", "百度");
        spider.put("www.baidu.com", "百度");

        spider.put("Google Web Preview", "谷歌");
        spider.put("Google Search Console", "谷歌站长工具");
        spider.put("Google-Site-Verification", "谷歌站长验证");
        spider.put("Googlebot-Mobile", "谷歌手机搜索");
        spider.put("Googlebot-Image", "谷歌图片搜索");
        spider.put("AppEngine-Google", "谷歌");
        spider.put("Mediapartners", "谷歌");
        spider.put("FeedBurner", "谷歌");
        spider.put("Googlebot", "谷歌");
        spider.put("Google", "谷歌");
        spider.put("google.com", "谷歌");

        spider.put("YoudaoBot", "网易有道");
        spider.put("YodaoBot", "网易有道");

        spider.put("360Spider", "360");
        spider.put("bingbot", "必应");
        spider.put("Yahoo", "雅虎");
        spider.put("Sosospider", "腾讯搜搜");
        spider.put("Sosoimagespider", "搜索图片");

        spider.put("Sogou", "搜狗蜘蛛");
        spider.put("msnbot", "MSN蜘蛛");
        spider.put("YisouSpider", "一搜蜘蛛");
        spider.put("ia_archiver", "Alexa蜘蛛");
        spider.put("EasouSpider", "宜sou蜘蛛");
        spider.put("JikeSpider", "即刻蜘蛛");
        spider.put("EtaoSpider", "一淘网蜘蛛");


        spider.put("AdsBot", "Adwords");
        spider.put("Speedy", "entireweb");
        spider.put("YandexBot", "YandexBot");
        spider.put("AhrefsBot", "AhrefsBot");
        spider.put("ezooms.bot", "ezooms.bot");

        spider.put("Java", "Java程序");
        spider.put("Mnogosearch", "MnoGoSearch搜索引擎（PHP）");
        spider.put("Morfeus Fucking Scanner", "PHP漏洞扫描器");
        spider.put("project25499", "Project 25499扫描器");
        spider.put("25499", "Project 25499扫描器");
        spider.put("James BOT", "JamesBOT搜索引擎");
        spider.put("cognitiveseo", "JamesBOT搜索引擎");

        spider.put("Iframely", "URL Meta Debugger插件");
        spider.put("muhstik-scan", "僵尸网络-挖矿软件");
        spider.put("muhstik", "僵尸网络-挖矿软件");
        spider.put("SEMrushBot", "站点分析蜘蛛");// 可屏蔽
        spider.put("python-requests", "python爬虫");
        spider.put("python", "python爬虫");
        spider.put("Test Certificate Info", "测试证书信息");
        spider.put("w3m/0.5.3+git20180125", "w3m");
        spider.put("wget", "wget");
        spider.put("gnu.org/gnu/wget", "wget");
        spider.put("WinHTTP", "WinHTTP");
        spider.put("WordPress", "WordPress");
        spider.put("Xenu Link Sleuth", "死链接检测工具");
        valueOperations.set(KEY, spider, 7, TimeUnit.DAYS);
        return spider;
    }
}
