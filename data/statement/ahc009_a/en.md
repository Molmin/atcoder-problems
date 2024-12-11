## Story

A map like in the figure below is given.
Takahashi's home is located in the square with the red circle, and AtCoder's office is located in the square with the blue circle.
He memorizes his commuting route to the office as a string of characters such as DRDR, which means Down, Right, Down, and Right.
Because he is quite forgetful, he sometimes forgets some parts of the string he has memorized.
For example, if he forgets the third character, he will move down, right, and right, and will be lost without reaching the office.
Therefore, he decided to memorize a robust string that would allow him to reach the office with a high probability even if he forgets some parts of the string.
For example, if he memorizes a string DRDRDR, he can reach the office even if he forgets any one of the characters.
Your task is to find a string that will allow Takahashi to reach the office quickly and with a high probability.

![](https://img.atcoder.jp/ahc009/f29506fb2_1.svg)
DRDR

![](https://img.atcoder.jp/ahc009/f29506fb2_2.svg)
DRDR

![](https://img.atcoder.jp/ahc009/f29506fb2_3.svg)
DRDRDR

## Problem Statement

You are given a map consisting of $20\times 20$ squares.
The outside of the map is surrounded by walls.
There may also be walls between adjacent squares.
Let $(0,0)$ denote the top-left square, and $(i,j)$ denote the square at the $i$-th row from the top and $j$-th column from the left.
Takahashi's home is located at $(s_i, s_j)$ and AtCoder's office is located at $(t_i, t_j)$.
By representing up, down, left, and right movements as `U`, `D`, `L`, and `R`, respectively, output a commuting route from the home to the office as a string of length less than or equal to $200$.

Let $L$ be the length of the output string.
Starting from the home, Takahashi will do the following action in each $t=1,\cdots,L$ turn.

- With constant probability $p$, he cannot recall the $t$-th character and stays in the current square.
- With the remaining probability $1-p$, he moves one square in the direction represented by the $t$-th character. If there is a wall in that direction, he stays in the current square.

When he gets to the office, he immediately terminate the move.

## Scoring

Let $S$ be a random variable defined as $S=401-t$ if he gets to the office after $t$ turns of actions and $S=0$ if he fails to get to the office, and compute its expected value, $E[S]$.
Then, you will get a score of $\mathrm{round}(250000\times E[S])$.
If your output is invalid (the length exceeds 200 or contains characters other than `U`, `D`, `L`, and `R`), it will be judged as WA.

There are 100 test cases, and the score of a submission is the total score for each test case. If you get a result other than AC for one or more test cases, the score of the submission will be zero. The highest score obtained during the contest time will determine the final ranking, and there will be no system test after the contest. If more than one participant gets the same score, the ranking will be determined by the submission time of the submission that received that score.

## Input

Input is given from Standard Input in the following format:

> $s_i$ $s_j$ $t_i$ $t_j$ $p$
> 
> $h_{0,0}$ $\cdots$ $h_{0,18}$
> 
> $\vdots$
> 
> $h_{19,0}$ $\cdots$ $h_{19,18}$
> 
> $v_{0,0}$ $\cdots$ $v_{0,19}$
> 
> $\vdots$
> 
> $v_{18,0}$ $\cdots$ $v_{18,19}$

The coordinates of the home and the office satisfy $0\leq s_i\leq 4$, $0\leq s_j\leq 4$, $15\leq t_i\leq 19$, and $15\leq t_j\leq 19$.
$p$ is a real number representing the probability of forgetting each character and satisfies $0.1\leq p\leq 0.5$.
$h_{i,0}$ $\cdots$ $h_{i,18}$ is a string of $19$ characters consisting of only $0$ or $1$.
If there is a wall between the squares $(i,j)$ and $(i,j+1)$, then $h_{i,j}=1$, otherwise $h_{i,j}=0$.
$v_{i,0}$ $\cdots$ $v_{i,19}$ is a string of $20$ characters consisting of only $0$ or $1$.
If there is a wall between the squares $(i,j)$ and $(i+1,j)$, then $v_{i,j}=1$, otherwise $v_{i,j}=0$.
It is guaranteed that all squares are reachable from the home.

## Output

Output a string that Takahashi memorizes in one line to Standard Output.

[Show example](https://img.atcoder.jp/ahc009/cf3f791aac0f80374c60.html?lang=en&amp;show=example)

## Input Generation

Let $\mathrm{rand}(L,U)$ be a function that generates a uniform random integer between $L$ and $U$, inclusive.

### Generation of $(s_i, s_j)$, $(t_i, t_j)$, and $p$

We generate $s_i=\mathrm{rand}(0, 4)$, $s_j=\mathrm{rand}(0, 4)$, $t_i=\mathrm{rand}(15, 19)$, $t_j=\mathrm{rand}(15, 19)$, and $p=\mathrm{rand}(10, 50) / 100$.

### Generation of $h_{i,j}$ and $v_{i,j}$

Let $[k]=\{0,1,\cdots,k-1\}$.
Let $G=(V,E)$ be a grid graph such that $V=[20]\times[20]$ and $E=\{\{(i,j),(i,j+1)\}\mid i\in[20],j\in[19]\}\cup\{\{(i,j),(i+1,j)\}\mid i\in[19],j\in[20]\}$.
We generate two spanning trees $G_r=(V,E_r)$ $(r=1,2)$ of $G$ by performing the following process twice independently.

1. First, we randomly shuffle the edges $E$ and obtain an ordered edge list $e_0,\cdots,e_{759}$.
2. Starting from $E_r=\emptyset$, for each $e_k=\{(i,j),(i',j')\}$ in order from $k=0$ to $k=759$, we insert $e_k$ into $E_r$ if $(i,j)$ and $(i',j')$ are not connected in $G_r$.

Using the obtained two spanning trees, we generate $h$ and $v$ as follows.

- $h_{i,j}=0 \iff \{(i,j),(i,j+1)\}\in E_1\cup E_2$
- $v_{i,j}=0 \iff \{(i,j),(i+1,j)\}\in E_1\cup E_2$

## Tools (Input generator and visualizer)

- [Web version](https://img.atcoder.jp/ahc009/cf3f791aac0f80374c60.html?lang=en): This is more powerful than the local version and can display animations.
- [Local version](https://img.atcoder.jp/ahc009/cf3f791aac0f80374c60.zip): You need a compilation environment of [Rust language](https://www.rust-lang.org/).-   - [Pre-compiled binary for Windows](https://img.atcoder.jp/ahc009/cf3f791aac0f80374c60_windows.zip): If you are not familiar with the Rust language environment, please use this instead.

<font color="red">**Sharing visualization results is not allowed until the end of the contest. **</font>

```input1
1 2 19 16 0.10
0010000100110011100
1000001000001000001
0000000000000000010
0100000000000110100
0000000000000000100
1000101100000101010
0010001011000110000
0000001001000000000
0000000100010001001
0010010000100000001
0001000010000100000
0011010000000001000
0000000101010100000
0000001000000100010
0110100010000000000
0010011101000101000
0000100110010000000
0010000101101000010
1001000000000000000
1000110000000000000
00000001000000000100
00001000010001000000
00010001010000010000
01110010101000010100
00000000000001100000
00001000010000000100
00101000000010110011
01010100000000000000
00001101010010010010
10000000000000010100
01011010000001100100
00000000000000010011
00001100111000110100
00000010000000000000
00010000100111000000
11010000001001010100
01100010011001011001
00000101000010101010
00100000000000000001
```

```output1
RDLRLRRDUUDRLURDRRDDLRLRUURUUUUDRDRUUDLRUDLLDDDDURLRUDDLDRDLRLLLLUDRUDRRULRULRDLRLDLLUUULDLUURRLRDRRRRDULDRLRRRRDDDDDRULDDURDDDRDLRRLDLDLDLRLLLUDDRDDDUURUDDLLLUULLLLDLUDRLLDLLULRLDLDDRLDRDLURURULRDDDR
```