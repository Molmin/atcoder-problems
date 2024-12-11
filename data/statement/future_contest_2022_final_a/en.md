## Problem Statement

F Corporation is developing a robotic vacuum cleaner, Takahashi-kun cleaner.
This robot works with a program of the following form, which consists of only basic commands and repetitions.

### Basic Commands

- `L`: Turn left by 90 degrees.
- `R`: Turn right by 90 degrees.
- `l`: If the robot is facing a wall, turn left by 90 degrees.
- `r`: If the robot is facing a wall, turn right by 90 degrees
- `F`: If the robot is not facing a wall, move forward one square.

### Repetitions

By writing a positive integer $k$ before a basic command, the basic command will be repeated $k$ times.
For example, the program `RFFFFFFFFFF` can be shortened to `R10F`.
Programs can be grouped by `()`.
By writing a positive integer $k$ before a group, the program in the group will be repeated $k$ times.
For example, the program `RFRFRFLRFRFRFL` can be shortened to `2(3(RF)L)`.

The floor to be cleaned is divided into $N\times N$ squares and is surrounded by walls. There may also be walls between adjacent squares.
Let $(0,0)$ denote the top-left square, and $(i,j)$ denote the square at the $i$-th row from the top and $j$-th column from the left.
The robot starts cleaning in the square $(s_i,s_j)$ facing upward.
The robot will clean all the visited squares, including the initial position.

Your task is to output a short program that can clean all the squares.
The robot takes one unit of time to execute one basic command, and the cleaning must be completed within $5000$ unit of time.
If the output program does not finish in $5000$ unit time, it will be terminated after executing the $5000$th basic command.
It also takes one unit of time to execute the basic command `l` or `r` without facing the wall, or to execute the basic command `F` with facing the wall.
The robot will also clean the square that it moves to by the $5000$th basic command.

## Scoring

Let $L$ be the number of characters in the output program, and $M$ be the number of squares that has been cleaned when the program execution is completed or terminated after $5000$ unit time.
Note that $L$ is the number of characters, not the number of basic commands.
For example, the program `100(RF)` executes the basic commands $200$ times, but the number of characters is $L=7$.

- If $L &gt; 10000$ or your output is not a valid program, your submission will be judged as WA
- If $M=N^2$, you will get a score of $N^2 + \mathrm{round}(10^8/(100+L))$.
- If $M&lt;N^2$, you will get a score of $M$.

There are 100 test cases, and the score of a submission is the total score for each test case. If you get a result other than AC for one or more test cases, the score of the submission will be zero. The highest score obtained during the contest time will determine the final ranking, and there will be no system test after the contest. If more than one participant gets the same score, the ranking will be determined by the submission time of the submission that received that score.

## Input

Input is given from Standard Input in the following format:

> $s_i$ $s_j$
> 
> $h_{0,0}$ $\cdots$ $h_{0,N-2}$
> 
> $\vdots$
> 
> $h_{N-1,0}$ $\cdots$ $h_{N-1,N-2}$
> 
> $v_{0,0}$ $\cdots$ $v_{0,N-1}$
> 
> $\vdots$
> 
> $v_{N-2,0}$ $\cdots$ $v_{N-2,N-1}$

We fix $N=20$ for all test cases.
$(s_i,s_j)$ represents the initial position of the robot and satisfies $0\leq s_i, s_j\leq N-1$.

$h_{i,0}$ $\cdots$ $h_{i,N-2}$ is a string of $N-1$ characters consisting of only $0$ or $1$.
If there is a wall between the squares $(i,j)$ and $(i,j+1)$, then $h_{i,j}=1$, otherwise $h_{i,j}=0$.
$v_{i,0}$ $\cdots$ $v_{i,N-1}$ is a string of $N$ characters consisting of only $0$ or $1$.
If there is a wall between the squares $(i,j)$ and $(i+1,j)$, then $v_{i,j}=1$, otherwise $v_{i,j}=0$.
It is guaranteed that all squares are reachable from the initial position.

## Output

Output a program to operate the robot in one line to Standard Output.

## Input Generation

### Generation of $s_i$ and $s_j$

$s_i$ and $s_j$ are generated from uniform random integers between $0$ and $N-1$, inclusive.

### Generation of $h_{i,j}$ and $v_{i,j}$

Let $[k]=\{0,1,\cdots,k-1\}$.
Starting from $N^2$ isolated vertices $V=[N]\times[N]$, we generate a graph $G=(V,E)$ by the following process.

1. First, we randomly shuffle a set of edges $\{\{(i,j),(i,j+1)\}\mid i\in[N],j\in[N-1]\}\cup\{\{(i,j),(i+1,j)\}\mid i\in[N-1],j\in[N]\}$ and obtain an ordered edge list $e_0,\cdots,e_{2N^2-2N-1}$.
2. For each $e_k=\{(i,j),(i',j')\}$ in order from $k=0$ to $k=2N^2-2N-1$, we insert $e_k$ into $E$ if $(i,j)$ and $(i',j')$ are not connected in $G$.
3. For each $e_k=\{(i,j),(i',j')\}$ again in order from $k=0$ to $k=2N^2-2N-1$, we insert $e_k$ into $E$ if the degree of $(i,j)$ is $1$ or the degree of $(i',j')$ is $1$.

Using the generated graph, we generate $h$ and $v$ as follows.

- $h_{i,j}=0 \iff \{(i,j),(i,j+1)\}\in E$
- $v_{i,j}=0 \iff \{(i+1,j),(i,j)\}\in E$

## Tools (Input generator and visualizer)

- [Local version](https://img.atcoder.jp/future-contest-2022-final/e4ace3a9dfd2d994ac246560e10d2f4e.zip): You need a compilation environment of [Rust language](https://www.rust-lang.org/).
- [Web version](https://img.atcoder.jp/future-contest-2022-final/e4ace3a9dfd2d994ac246560e10d2f4e_en.html): This is more powerful than the local version and can display animations.

<font color="red">**Sharing visualization results is not allowed until the end of the contest.**</font>
<!-- <font color="red">You are allowed to share visualization results for seed=0 using the "share on twitter" function of the web visualizer during the contest.</font>
You have to use the specified hashtag and public account.
Note that it is prohibited to share outputs for other seeds, information about how you obtained that output, solutions, discussions, or source code until the end of the contest.
<a href="https://twitter.com/search?q=%23HTTF%20share_visualizer&src=typed_query&f=live">List of shared visualization results</a> -->

```input1
14 18
0000000000000010000
0001000001000110100
0010010001010101000
0011100000110100010
0011100000001001010
0001011000001101000
0010000000010100010
0011001000000000100
1101010010010100000
1001010110000010100
1001110101010010100
0000101000101100101
1010000100101010110
0000101100100001110
1001100100000000010
0011000100010100011
0010010000011001001
1101010011001000000
1011000001001001010
0001000101000010100
00101001010100000010
00100001100111000101
10000111000000010100
00000001011000101000
01000100011100010010
11011001101100001101
00101110101010111000
00000000101000100111
00101001011101010010
00000010000110100010
00110001010000001010
01100000110000110000
00011100000011000000
01010000101101110010
00100110001011010000
10000100101000110100
00100001100100001010
00000101001101111001
01000010000010000000
```

```output1
10(RlFlF)LFF2(3(RF)L)R10FRFR5FLFFFR4FR3FL3FR2FL2FLFFFLFFFRFFR3FRFRFFRFL2FL2FRFR2FL5FFFFFFFFFFL2FL2FR4FRFFL9FL2FRFRFFL3FL3FLFFFFFLFFL4FLFLFRFLFR2FRFRFL2FL3FLFR2FRFRFR2FLFFLFRFFR3FFFLFFFRFRFRFL2FR2FL3FRFL4FLFFR6FRFRFFFRFL4FFFLFL2FRRFL2FRR4FFRFRFR2FRFR2FLFFFR4FLFRF4FR9FRFFFFFFRFFLFL3FRFFLFL4FLFRFRFLFLFRFRFL2FLFLFLFRFR3FRFLFLLFR2FR3FFFLFFRFLFFL2FRFLFL4FLFLLFRFRFLFRF2FL4FLFRFLFLFRR2FL3FRFFRFRFLFFFRFLFLFRFFLFFLFLFR4FRFFRFRFLFFLL2FR2FFRFFFFRFRFLFR2FRFRFRFL2FFR8FR2FRFFRF2FR3FRFLFR2FRFRFL2F2FFLFLFRF2FRFL5FRFLL4FRFLFFL2FRFRFL2FRFL4FL4FLFRFFLFL2FRR3FFRFFRFRFFR2FLFL2FRFRFRFL2FL7FR2FLFFLLFL3FRFLFLFFFFFL4FLFRFLFLFFR5FL2FLFRFR3FLFL7FL2FLF2FLFL4FLFR2FL3FR2FFRFFRFRFRR3FR2FLFR11FR3FLFRFRFL2FL3FRFL2FLFLFRFL2FRFLLFL3FLFLFRFFL2FLFRFLFRFLFLFRRFRFLFL4FRFLFR2FLFLFRF2FLFRFL4FR2FLFR2FRFLFRFRFL2F
```