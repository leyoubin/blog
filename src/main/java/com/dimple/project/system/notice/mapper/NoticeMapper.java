package com.dimple.project.system.notice.mapper;

import com.dimple.project.system.notice.domain.Notice;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * @className: NoticeMapper
 * @description: 公告 数据层
 * @auther: Dimple
 * @Date: 2019/3/13
 * @Version: 1.1
 */
public interface NoticeMapper {
    /**
     * 查询公告信息
     *
     * @param noticeId 公告ID
     * @return 公告信息
     */
    Notice selectNoticeById(Long noticeId);

    /**
     * 查询公告列表
     *
     * @param notice 公告信息
     * @return 公告集合
     */
    List<Notice> selectNoticeList(Notice notice);

    /**
     * 新增公告
     *
     * @param notice 公告信息
     * @return 结果
     */
    int insertNotice(Notice notice);

    /**
     * 修改公告
     *
     * @param notice 公告信息
     * @return 结果
     */
    int updateNotice(Notice notice);

    /**
     * 批量删除公告
     *
     * @param noticeIds 需要删除的数据ID
     * @return 结果
     */
    int deleteNoticeByIds(String[] noticeIds);

    /**
     * 切换显示
     *
     * @param display
     * @param id
     * @return
     */
    int changeNoticeDisplayById(@Param("display") Integer display, @Param("id") Integer id);

    /**
     * 获取显示的notice
     *
     * @return notice集合
     */
    List<Notice> selectNoticeDisplay();
}
