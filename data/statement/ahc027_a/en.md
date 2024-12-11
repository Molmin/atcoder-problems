## Story

F Corporation developed a robotic vacuum cleaner, Takahashi-kun cleaner No.2, and decided to entrust it with the cleaning of their office.
Takahashi-kun cleaner No.2 can operate indefinitely through solar power and repeats cleaning on a predetermined route indefinitely.
The office has varying levels of susceptibility to dirt in different areas, and by frequently cleaning the areas that are more prone to dirt, the entire office can be kept cleaner.

## Problem Statement

There is an $N\times N$ square board.
Let $(0, 0)$ be the coordinates of the top-left square, and $(i, j)$ be the coordinates of the square located $i$ squares down and $j$ squares to the right from there.
The perimeter of the $N\times N$ board is surrounded by walls, and there may also be walls between adjacent squares.

Each square $(i,j)$ is assigned a value $d_{i,j}$ which represents its susceptibility to dirt.
Your task is to clean these squares by moving around the board.
You can move to an adjacent square that is not blocked by a wall.
After the move, the dirtiness of the square you moved to becomes $0$, and the dirtiness of all other squares $(i, j)$ increases by $d_{i, j}$.
Consider a cleaning route that starts and ends at $(0, 0)$, with a length (number of moves) not exceeding $10^5$.
The cleaning route may pass through the same square multiple times, but must visit each square at least once.

Let $a_{t,i,j}$ denote the dirtiness of each square $(i,j)$ after the $t$-th move, and let $S_t=\sum_{i=0}^{N-1}\sum_{j=0}^{N-1} a_{t,i,j}$ denote the total dirtiness.
At $t=0$, we assume that the dirtiness of all squares is $a_{0,i,j}=0$.
Define the **average dirtiness** as
\[
    \bar{S}=\frac{1}{L}\sum_{t=L}^{2L-1}S_t,
\]
which is the average of the total dirtiness during the period $t=L,L+1,\cdots,2L-1$ when the cleaning route of length $L$ is repeated infinitely.

Please find a cleaning route that minimizes the average dirtiness as much as possible.

### The Meaning of Average Dirtiness

We can prove that $a_{t,i,j}=a_{t+L,i,j}$ for $t\geq L$ when the cleaning route of length $L$ is repeated infinitely.
Therefore, considering the average $\frac{1}{T} \sum_{t=0}^{T-1} S_t$ of the total dirtiness up to $T$ turns, its limit as $T \to \infty$ coincides with the average dirtiness.

## Scoring

Let $\bar{S}$ be the average dirtiness of the output cleaning route.
Then you will obtain an absolute score of $\mathrm{round}(\bar{S})$.
The lower the absolute score, the better.
If you output an illegal cleaning route (length exceeds $10^5$, does not return to $(0,0)$, there is an unvisited square, or it hits a wall), it will be judged as WA.

For each test case, we compute the <font color="red">**relative score**</font> $\mathrm{round}(10^9\times \frac{\mathrm{MIN}}{\mathrm{YOUR}})$, where YOUR is your absolute score and MIN is the lowest absolute score among all competitors obtained on that test case. The score of the submission is the sum of the relative scores.

The final ranking will be determined by the system test with more inputs which will be run after the contest is over.
In both the provisional/system test, if your submission produces illegal output or exceeds the time limit for some test cases, only the score for those test cases will be zero, and your submission will be excluded from the MIN calculation for those test cases.

The system test will be performed only for <font color="red">**the last submission which received a result other than CE **</font>.
Be careful not to make a mistake in the final submission.

### Number of test cases

- Provisional test: 50
- System test: 2000. We will publish [seeds.txt](https://img.atcoder.jp/ahc027/seeds.txt)  (sha256=cdea33a6050850bf1387e2191b802a1df7e43fcb969fd6c3bf9cbd96a4d790d7) after the contest is over.

### About relative evaluation system

In both the provisional/system test, the standings will be calculated using only the last submission which received a result other than CE.
Only the last submissions are used to calculate the MIN for each test case when calculating the relative scores.

The scores shown in the standings are relative, and whenever a new submission arrives, all relative scores are recalculated.
On the other hand, the score for each submission shown on the submissions page is the sum of the absolute score for each test case, and the relative scores are not shown.
In order to know the relative score of submission other than the latest one in the current standings, you need to resubmit it.
If your submission produces illegal output or exceeds the time limit for some test cases, the score shown on the submissions page will be 0, but the standings show the sum of the relative scores for the test cases that were answered correctly.

### About execution time

Execution time may vary slightly from run to run.
In addition, since system tests simultaneously perform a large number of executions, it has been observed that execution time increases by several percent compared to provisional tests.
For these reasons, submissions that are very close to the time limit may result in TLE in the system test.
Please measure the execution time in your program to terminate the process, or have enough margin in the execution time.

## Input

Input is given from Standard Input in the following format.

> $N$
> 
> $h_{0,0}\cdots h_{0,N-1}$
> 
> $\vdots$
> 
> $h_{N-2,0} \cdots h_{N-2,N-1}$
> 
> $v_{0,0} \cdots v_{0,N-2}$
> 
> $\vdots$
> 
> $v_{N-1,0} \cdots v_{N-1,N-2}$
> 
> $d_{0,0}$ $\cdots$ $d_{0,N-1}$
> 
> $\vdots$
> 
> $d_{N-1,0}$ $\cdots$ $d_{N-1,N-1}$

- $N$ is the horizontal and vertical size of the board and satisfies $20\leq N\leq 40$.
- $h_{i,0}\cdots h_{i,N-1}$ is a string of length $N$ consisting of only `0` and `1`. $h_{i,j}=1$ if and only if there is a wall between square $(i,j)$ and its lower neighbor $(i+1,j)$.
- $v_{i,0}\cdots v_{i,N-2}$ is a string of length $N-1$ consisting of only `0` and `1`. $v_{i,j}=1$ if and only if there is a wall between square $(i,j)$ and its right neighbor $(i,j+1)$.
- All squares are guaranteed to be reachable from $(0, 0)$.
- $d_{i,j}$ is an integer value representing the susceptibility to dirt of square $(i,j)$ and satisfies $1\leq d_{i,j}\leq 10^3$.

## Output

Represent a move up, down, left, or right by `U`, `D`, `L`, or `R`, respectively.
Represent the cleaning route of length $L$ as a string of $L$ characters corresponding to each move, and output it in a single line to Standard Output.

[Show example](https://img.atcoder.jp/ahc027/aPdjCUIZ.html?lang=en&amp;seed=0&amp;output=sample)

## Sample Solution

This is a sample solution in Python.
In this program, by moving along the depth-first search tree starting from (0,0), each edge in the tree is passed twice, once on the way there and once on the way back, and the program outputs a cleaning route that returns to (0,0).
> import sys
> 
> sys.setrecursionlimit(1000000)
> 
> 
> 
> 
> 
> 
> 
> 
> 
> 
> 
> 
> 
> N = int(input())
> 
> h = [input() for _ in range(N-1)]
> 
> v = [input() for _ in range(N)]
> 
> d = [list(map(int, input().split())) for _ in range(N)]
> 
> 
> 
> 
> 
> 
> 
> 
> 
> visited = [[False for _ in range(N)] for _ in range(N)]
> 
> DIJ = [(0, 1), (1, 0), (0, -1), (-1, 0)]
> 
> DIR = "RDLU"
> 
> 
> 
> 
> 
> 
> 
> 
> 
> def dfs(i, j):
> 
>     visited[i][j] = True
> 
>     for dir in range(4):
> 
>         di, dj = DIJ[dir]
> 
>         i2 = i + di
> 
>         j2 = j + dj
> 
>         if 0 &lt;= i2 &lt; N and 0 &lt;= j2 &lt; N and not visited[i2][j2]:
> 
>             if di == 0 and v[i][min(j, j2)] == '0' or dj == 0 and h[min(i, i2)][j] == '0':
> 
>                 print(DIR[dir], end='')
> 
>                 dfs(i2, j2)
> 
>                 print(DIR[(dir + 2) % 4], end='')
> 
> 
> 
> 
> 
> 
> 
> 
> 
> dfs(0, 0)
> 
> print()

## Input Generation

Let $\mathrm{randint}(L,U)$ be a function that generates a uniform random integer between $L$ and $U$, inclusive.
Let $\mathrm{randdouble}(L,U)$ be a function that generates a uniform random floating-point number at least $L$ and less than $U$.

### Generation of $N$

$N=\mathrm{randint}(20,40)$.

### Generation of $h$ and $v$

Generate a parameter $w=\mathrm{randint}(1,N)$ that controls the number of walls.
Starting from a state with no walls, generate walls by repeating the following operation $w$ times.

Randomly select one of the four directions (up, down, left, right).
For the left direction, generate $i=\mathrm{randint}(0,N-2)$, $j=\mathrm{randint}(0,N-1)$, and $k=\mathrm{randint}(3,\lfloor N/2\rfloor)$.
Then, set $h_{i,j}\cdots h_{i,\max(j-k+1, 0)}$ to $1$.
Similarly, for the right direction, generate values in the same manner, and set $h_{i,j}\cdots h_{i,\min(j+k-1, N-1)}$ to $1$.
For the upward direction, generate $i=\mathrm{randint}(0,N-1)$, $j=\mathrm{randint}(0,N-2)$, and $k=\mathrm{randint}(3,\lfloor N/2\rfloor)$.
Then, set $v_{i,j}\cdots v_{\max(i-k+1, 0),j}$ to $1$.
Similarly, for the downward direction, generate values in the same manner, and set $v_{i,j}\cdots v_{\min(i+k-1, N-1),j}$ to $1$.

After $w$ iterations are completed, check if all squares are reachable from $(0, 0)$, and if there are unreachable squares, remove all walls and redo the $w$ iterations.

### Generation of $d$

Generate a parameter $c=\mathrm{randint}(1,\lfloor N/2\rfloor)$ that determines the number of susceptible regions.
Create an array $d'$ with $d'_{i,j}=0$ for all $(i,j)$, and update $d'$ by repeating the following process $c$ times.

Generate $i=\mathrm{randint}(0,N-1)$, $j=\mathrm{randint}(0,N-1)$, $m=\mathrm{randint}(N,\lfloor N^2/c\rfloor)$, and $b=\mathrm{randdouble}(0,2)$.
Generate a set $S$ by starting from $S=\{(i,j)\}$ and repeating the following process until the size of $S$ becomes $m$.

Randomly choose $p\in S$, and randomly choose one of the four directions (up, down, left, or right). If there is no wall in that direction from $p$, add the adjacent square $q$ to $S$.

For each square $(i',j')\in S$ contained in the generated $S$, overwrite $d'_{i',j'}=b$.

After $c$ iterations are completed, generate $d_{i,j}=\mathrm{round}(10^{d'_{i,j}+\mathrm{randdouble}(0,1)})$ for each $(i,j)$.

## Tools (Input generator and visualizer)

- [Web version](https://img.atcoder.jp/ahc027/aPdjCUIZ.html?lang=en): This is more powerful than the local version providing animations.
- [Local version](https://img.atcoder.jp/ahc027/aPdjCUIZ_v2.zip): You need a compilation environment of [Rust language](https://www.rust-lang.org/).-   - [Pre-compiled binary for Windows](https://img.atcoder.jp/ahc027/aPdjCUIZ_windows_v2.zip): If you are not familiar with the Rust language environment, please use this instead.

Please be aware that sharing visualization results or discussing solutions/ideas during the contest is prohibited.

```input1
20
00000000000000000000
00000000000000000000
00000000000000000000
00000000000000000000
00000000000000000000
00000000000000000000
00000000000000000000
00000000000000000000
00000000000000000000
00000000000000000000
00000000000000000000
00000000000000000000
00000000000000000000
00000000000000000000
00000000000000000000
00000000000000000000
00000000000000000000
00000000000000000000
00000000000000000000
0000000000000000000
0000000000000000000
0000000000000000000
0000000000000000000
0000100000000000000
0000100000000000000
0000100000000000000
0000100000000000000
0000100000000000000
0000100000000000000
0000100000000000000
0000000000000000000
0000000000000000000
0000000000000000000
0000000000000000000
0000000000000000000
0000000000000000000
0000000000000000000
0000000000000000000
0000000000000000000
251 348 2 2 5 4 14 13 13 43 7 10 8 36 11 10 3 5 1 6
179 68 3 7 6 13 25 25 30 26 13 6 16 11 20 9 1 5 10 1
135 42 1 1 4 3 2 39 24 20 51 13 29 47 8 21 4 2 2 3
57 138 133 46 4 4 7 18 26 6 17 43 29 48 10 21 2 8 3 1
148 77 220 100 127 2 3 8 41 9 19 14 17 1 2 1 2 1 2 3
237 65 193 245 244 10 1 2 7 20 5 5 4 6 4 5 4 8 2 2
107 73 85 176 1 5 6 22 11 17 4 12 20 5 1 3 8 2 7 4
262 201 56 4 9 9 6 2 2 1 20 25 8 1 1 4 1 3 3 6
3 93 1 3 1 6 4 5 7 4 3 29 17 18 9 2 6 9 2 5
68 184 236 102 3 2 2 4 16 20 5 26 21 19 124 276 1 11 39 2
5 4 2 3 8 1 4 2 6 16 3 7 25 17 5 501 172 5 279 8
1 4 5 6 7 5 3 2 1 4 9 7 245 151 6 4 10 2 78 13
2 4 4 9 6 4 2 4 8 4 4 14 17 657 15 3 4 10 474 9
7 3 9 3 1 2 2 2 4 2 3 8 15 7 12 9 8 7 5 630
2 1 2 4 3 1 3 1 3 7 4 4 8 8 10 3 4 10 203 220
3 6 9 1 2 4 6 2 3 2 1 40 24 6 3 8 4 7 248 287
6 6 1 4 2 8 2 7 3 6 4 3 1 12 12 3 11 16 85 222
7 6 2 7 2 5 2 5 4 8 2 6 1 5 9 2 4 7 1 8
3 2 9 3 2 2 6 2 3 5 2 4 7 3 5 11 7 128 7 5
4 3 4 9 1 1 4 3 4 3 3 5 1 1 2 18 9 2 9 6
```

```output1
RRRRRRRRRRRRRRRRRRRDDDDDDDDDDDDDDDDDDDLLLLLLLLLLLLLLLLLLLURRRRRRRRRRRRRRRRRRULLLLLLLLLLLLLLLLLLURRRRRRRRRRRRRRRRRRULLLLLLLLLLLLLLLLLLURRRRRRRRRRRRRRRRRRULLLLLLLLLLLLLLLLLLURRRRRRRRRRRRRRRRRRULLLLLLLLLLLLLLLLLLURRRRULLLLURRRRULLLLURRRRULLLLURRRRURRRRRRRRRRRRRRDDDDDDDLLLLLLLLLLLLLURRRRRRRRRRRRULLLLLLLLLLLLURRRRRRRRRRRRULLLLLLLLLLLLURRRRRRRRRRRRULLLLLLLLLLLLRRRRRRRRRRRRDLLLLLLLLLLLLDRRRRRRRRRRRRDLLLLLLLLLLLLDRRRRRRRRRRRRDLLLLLLLLLLLLDRRRRRRRRRRRRRUUUUUUUULLLLLLLLLLLLLLLDLLLURRURRRRRRRRRRRRRRRRLLLLLLLLLLLLLLLLLLRRDLLDRRRURRRRRRRRRRRRRRRDLLLLLLLLLLLLLLDLLLLDRRRRDLLLLDRRRRDLLLLDRRRRDLLLLDRRRRRRRRRRRRRRRRRRDLLLLLLLLLLLLLLLLLLDRRRRRRRRRRRRRRRRRRDLLLLLLLLLLLLLLLLLLDRRRRRRRRRRRRRRRRRRDLLLLLLLLLLLLLLLLLLDRRRRRRRRRRRRRRRRRRDLLLLLLLLLLLLLLLLLLDRRRRRRRRRRRRRRRRRRRUUUUUUUUUUUUUUUUUUULLLLLLLLLLLLLLLLLLL
```