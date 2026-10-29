# Version control exercises repository checklist

- [ ] **1 — GitHub account:** The repository is under the student's GitHub account.
- [ ] **4 — Project files and commits:**
  - [ ] The project has `story.txt`, `shopping_list.txt`, and `school/school_file.txt`.
  - [ ] History shows separate, descriptively named commits adding the story, shopping list, and school folder/file.
- [ ] **7 — Public GitHub repository:** The repository is public.
- [ ] **8 — Push to GitHub:** The GitHub repository contains the exercise 4 files and commits, including the initial story, shopping-list, and school commits and the additional shopping-list update. Confirm the commits are on the main/default branch.
- [ ] **9 — School file:** `school/` contains an additional file committed after the initial school-folder commit.
- [ ] **10 — Story edits:** The first and last lines of `story.txt` contain the expected changes.
- [ ] **11 — Merge commit:** History shows a merge commit with the message `my first merge` (or clearly matching it), and the combined changes are present on GitHub.
- [ ] **12 — Conflict-resolution result:** The final resolved file is present on GitHub and contains no conflict markers (`<<<<<<<`, `=======`, or `>>>>>>>`).
- [ ] **13 — Deleted file in history:** `secret.txt` is absent from the current repository, while history shows a commit adding it and a later commit deleting it. Check that the historical content is harmless placeholder text, not an actual secret or sensitive personal information.
- [ ] **14 — Changes and remote information:**
  - [ ] History shows a commit changing a file and that commit is present on GitHub.
  - [ ] `remote.txt` is committed and contains the remote-inspection command (normally `git remote -v`) and its output. Check that the listed URL matches this GitHub repository and uses HTTPS.
