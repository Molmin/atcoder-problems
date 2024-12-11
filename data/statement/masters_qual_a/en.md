## Problem Statement

There is an $N\times N$ square board.
Let $(0, 0)$ be the coordinates of the top-left square, and $(i, j)$ be the coordinates of the square located $i$ squares down and $j$ squares to the right from there.
The perimeter of the $N\times N$ board is surrounded by walls, and there may also be walls between squares.
Two squares that share an edge are defined as "adjacent squares" when there is no wall between them. (<font color="red">added at 13:15 JST</font>)

Each square $(i,j)$ has a unique number $a_{(i,j)}$ from $1$ to $N^2$.
Starting from their favorite initial position on the grid, Takahashi and Aoki perform the following sequence of actions at most $4 N^2$ steps.

1. The numbers on Takahashi's and Aoki's current positions can be exchanged if they want to.
2. Takahashi can move to a square adjacent to his current position if he wants to.
3. Aoki can move to a square adjacent to his current position if he wants to.

The sequence of actions is performed in the order $1\rightarrow 2\rightarrow 3$, and the entire sequence is considered as a single step.
They may move to adjacent squares without exchanging numbers, or they may stay in the same square after exchanging numbers.
It is also acceptable that their current positions are in the same square.

Please determine their actions so that the final numbers between adjacent squares are as close as possible.

## Scoring

Let $E$ be the set of whole pairs of adjacent squares, and consider the sum of squares of the differences of numbers in adjacent squares $\sum_{u,v\in E}(a_u-a_v)^2$.
Let $D'$ be the sum of squares in the initial state and $D$ be the sum of squares in the final state.
Then, you will obtain the following score.

\[
\max\left(1, \mathrm{round}\left(10^6\times \log_2\frac{D'}{D}\right)\right)
\]

There are 200 test cases in total, $10$ for each $t$ value described below, and the sum of the scores for each test case is the score for the submission.
The test cases are separated into distinct test sets (`test_t`) for each $t$ value, and in case of incorrect output or exceeding the time limit, only the corresponding test set will be scored $0$.
The highest score obtained during the contest will determine the final ranking, and there will be no system test after the contest.
If more than one participant gets the same score, they will be ranked in the same place regardless of the submission time.

## Input

Input is given from Standard Input in the following format.

> $t$ $N$
> 
> $v_{0,0} \cdots v_{0,N-2}$
> 
> $\vdots$
> 
> $v_{N-1,0} \cdots v_{N-1,N-2}$
> 
> $h_{0,0}\cdots h_{0,N-1}$
> 
> $\vdots$
> 
> $h_{N-2,0} \cdots h_{N-2,N-1}$
> 
> $a_{0,0}$ $\cdots$ $a_{0,N-1}$
> 
> $\vdots$
> 
> $a_{N-1,0}$ $\cdots$ $a_{N-1,N-1}$

- $t$ is an integer representing the input generation method, satisfying $0\leq t\leq 19$. See the Input Generation section for details.
- $N$ is the horizontal and vertical size of the board and satisfies $10\leq N\leq 100$.
- $v_{i,0}\cdots v_{i,N-2}$ is a string of length $N-1$ consisting of only `0` and `1`. $v_{i,j}=1$ if and only if there is a wall between square $(i,j)$ and its right neighbor $(i,j+1)$.
- $h_{i,0}\cdots h_{i,N-1}$ is a string of length $N$ consisting of only `0` and `1`. $h_{i,j}=1$ if and only if there is a wall between square $(i,j)$ and its lower neighbor $(i+1,j)$.
- All squares are guaranteed to be reachable each other.
- $a_{i,j}$ denotes the number initially written in the square $(i,j)$, and satisfies $1\leq a_{i,j}\leq N^2$.

## Output

First, determine Takahashi's initial position $(p_i,p_j)$ and Aoki's initial position $(q_i,q_j)$, and output them in the following format in a single line to Standard Output.

> $p_i$ $p_j$ $q_i$ $q_j$

The initial position may be determined freely as long as it is on the board.

Let $k$ be the total number of steps.
For each step, output to Standard Output three characters separated by spaces as in the following format, resulting in a total of $k$ lines.

> $s$ $d$ $e$

- $s$ is a character indicating whether or not the numbers are exchanged, `1` if so and `0` if not.
- $d$ is a character indicating the direction of Takahashi's movement, `U` `D` `L` `R` to move to the adjacent squares up, down, left, or right, respectively, or `.` if he does not move and stays at the current position.
- $e$ is the character indicating the direction of Aoki's movement, the same as in the case of Takahashi.

If there is a wall between him and the destination, or if the number of steps exceeds $4 N^2$, the submission will be judged as WA.

## Input Generation

**&lt;font color="red"&gt;
The part of the input, excluding $a$, is fixed depending on the remainder $t$ obtained by dividing the seed value that generates the input by 20, and the contents of `in_fixed/t.txt` contained in the input generator linked below are used as is.
The test case contains exactly 10 inputs for each $t\in \{0,1,\cdots,19\}$.
&lt;/font&gt;**

The number $a_{i,j}$ in each square is generated by randomly shuffling the values from $1$ to $N^2$.

## Tools (Input generator and visualizer)

- [Source code](https://img.atcoder.jp/masters-qual/ak2uQT08.zip): You need a compilation environment of [Rust language](https://www.rust-lang.org/).-   - [Pre-compiled binary for Windows](https://img.atcoder.jp/masters-qual/ak2uQT08_windows.zip): If you are not familiar with the Rust language environment, please use this instead.

Please be aware that sharing visualization results or discussing solutions/ideas outside of the team during the contest is prohibited.

```input1
0 10
000100001
000100001
000100001
000100000
001000010
001000010
001000010
001000000
000000000
000000000
0111111100
1100000000
0000000000
1110000000
0000000111
0000000000
0000111100
0000000000
0000000000
2 47 60 6 76 72 52 90 19 77
42 59 7 45 17 80 71 55 65 75
16 21 35 9 15 95 50 91 54 20
34 39 10 38 69 99 63 92 14 87
36 89 41 81 97 78 56 30 68 98
82 67 40 73 58 26 53 33 100 74
4 12 28 64 31 37 62 24 70 93
27 61 83 94 25 32 5 88 85 46
29 13 8 86 66 57 44 23 48 11
22 49 84 18 79 1 96 43 3 51
```

```output1
0 0 0 1
0 . R
1 D L
0 R .
0 R .
1 R L
```