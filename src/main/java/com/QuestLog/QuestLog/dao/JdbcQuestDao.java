package com.QuestLog.QuestLog.dao;

import com.QuestLog.QuestLog.QuestLogApplication;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;
import com.QuestLog.QuestLog.model.Quest;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class JdbcQuestDao implements QuestDao{
    private JdbcTemplate jdbcTemplate;

    public JdbcQuestDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Quest> viewActiveQuests(long userId){
        List<Quest> activeQuests = new ArrayList<>();
        String sql = "SELECT * FROM quests " +
                    "WHERE user_id = ?";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, userId);
        while (results.next()){
            activeQuests.add(mapRowToQuest(results));
        }
        return activeQuests;
    }

    private Quest mapRowToQuest(SqlRowSet results){
        Quest quest = new Quest();
        quest.setQuestId(results.getLong("quest_id"));
        quest.setUserId(results.getLong("user_id"));
        quest.setRepeatType(results.getInt("repeat"));
        quest.setQuestName(results.getString("quest_name"));
        quest.setQuestDescription(results.getString("description"));
        quest.setCompletionDate(results.getDate("completion_date"));
        return quest;
    }

}
