def find_anagrams(word, candidates):
    word_lower = word.lower()
    sorted_word = sorted(word_lower)

    result = []

    for candidate in candidates:
        candidate_lower = candidate.lower()

        if candidate_lower != word_lower and sorted(candidate_lower) == sorted_word:
            result.append(candidate)

    return result