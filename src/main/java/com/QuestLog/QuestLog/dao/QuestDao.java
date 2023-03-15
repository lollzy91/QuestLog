package com.QuestLog.QuestLog.dao;

import com.QuestLog.QuestLog.model.Quest;

import java.util.List;

public interface QuestDao {
    List<Quest> viewActiveQuests(String username);
    void addQuest(Quest newQuest);

}
