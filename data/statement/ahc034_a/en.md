## Story

AtCoder frequently hosts onsite contests and has decided to build its own contest venue.
The planned construction site is in a mountain area, and the ground must first be leveled.
Leveling will involve using a dump truck, which incurs costs for loading, unloading, and transporting soil.
Determine the method to level the ground with as little cost as possible.

## Problem Statement

There is an $N \times N$ grid of land.
Let $(0,0)$ be the coordinates of the top-left square and $(i,j)$ be the coordinates of the square located $i$ squares down and $j$ squares to the right from there.

The height $h_{i,j}$ of each square $(i,j)$ is given as input.
The total height of all squares is exactly $0$.

Initially, the dump truck is at the square $(0,0)$ with an empty load.
In each turn, you can perform one of the following three operations:

- Specify an integer $d$ satisfying $0&lt;d\leq 10^6$ to load $d$ units of soil from the current square onto the dump truck. This operation decreases the height of the current square by $d$ and increases the amount of soil loaded onto the dump truck by $d$. The height can become negative. This operation incurs a cost of $d$.
- Specify an integer $d$ satisfying $0&lt;d\leq 10^6$ to unload $d$ units of soil from the dump truck to the current square. This operation increases the height of the current square by $d$ and decreases the amount of soil loaded onto the dump truck by $d$. The value of $d$ must not exceed the amount of soil currently loaded onto the dump truck. This operation incurs a cost of $d$.
- Move the dump truck to an adjacent square (up, down, left, or right). The dump truck cannot move outside the $N \times N$ grid. If the dump truck has $d$ units of soil loaded, this operation incurs a cost of $100+d$.

You can perform a maximum of $100000$ turns of operation.
Your task is to determine the sequence of operations that minimizes the cost to make the height of every square $0$.

## Scoring

Let $\mathrm{cost}$ be the total cost of the output operation sequence.
Let $\mathrm{base}$ be the sum of $|h_{i,j}|$ for all $(i,j)$.
Let $h_{i,j}'$ be the final height of square $(i,j)$.
Define $\mathrm{diff}$ as the sum of $100|h_{i,j}'|+10000$ for all $(i,j)$ such that $h_{i,j}' \neq 0$.
Then, you will obtain the following score.

\[
\mathrm{round}\left(10^9\times \frac{\mathrm{base}}{\mathrm{cost}+\mathrm{diff}}\right)
\]

There are $150$ test cases, and the score of a submission is the total score for each test case.
If your submission produces an illegal output or exceeds the time limit for some test cases, the submission itself will be judged as WA or TLE , and the score of the submission will be zero.
The highest score obtained during the contest will determine the final ranking, and there will be no system test after the contest.
If more than one participant gets the same score, they will be ranked in the same place regardless of the submission time.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $h_{0,0}$ $\cdots$ $h_{0,N-1}$
> 
> $\vdots$
> 
> $h_{N-1,0}$ $\cdots$ $h_{N-1,N-1}$

In all test cases, $N$ is fixed at $20$.
The initial height $h_{i,j}$ of square $(i,j)$ is an integer that satisfies $-100 \leq h_{i,j} \leq 100$, and the total sum of all heights is guaranteed to be $0$.

## Output

Let $T$ be the number of operation turns.
The operation in the $t$-th turn is represented by the string $s_t$ as follows:

- The operation to load $d$ units of soil from the current square onto the dump truck: `+d`
- The operation to unload $d$ units of soil from the dump truck to the current square: `-d`
- The operation to move the dump truck to an adjacent square: `U`, `D`, `L`, and `R` for up, down, left, and right, respectively.

Then, output to Standard Output in the following format:

> $s_0$
> 
> $\vdots$
> 
> $s_{T-1}$

[Show example](https://img.atcoder.jp/ahc034/vImT4eac.html?lang=en&amp;seed=0&amp;output=sample)

## Input Generation

You are not required to understand this.
We recommend changing the seed value in the web visualizer to observe what kind of inputs are generated.

Let $\mathrm{rand}(L,U)$ be a function that generates a uniform random integer between $L$ and $U$, inclusive.
Let $\mathrm{noise}(y,x,\mathrm{seed})$ be a function that generates two-dimensional [Perlin noise](https://en.wikipedia.org/wiki/Perlin_noise) scaled to the range between $-1$ and $1$ based on a random seed value $\mathrm{seed}$.

First, generate a seed value for Perlin noise generation as $\mathrm{seed}=\mathrm{rand}(0,2^{32}-1)$.  

Next, for each $(i,j)$, generate $h_{i,j}=\mathrm{round}(\mathrm{noise}(i/10,j/10,\mathrm{seed})\times 50)$.
If $h_{i,j}=0$ for all $(i,j)$, then regenerate $\mathrm{seed}$.

Let $S$ be the sum of $h_{i,j}$.
To make $S=0$, perform the following transformation.

Shuffle all coordinates $(0,0),(0,1),\cdots,(N-1,N-1)$ in a uniformly random order, and let the $k$-th coordinate be $(i_k,j_k)$.  
If $S &gt; 0$, then for each $k=0,1,\cdots,S-1$, decrease $h_{i_{k\% N^2},j_{k\% N^2}}$ by $1$.  
If $S&lt;0$, then for each $k=0,1,\cdots,-S-1$, increase $h_{i_{k\% N^2},j_{k\% N^2}}$ by $1$.

## Tools (Input generator and visualizer)

- [Web version](https://img.atcoder.jp/ahc034/vImT4eac.html?lang=en): This is more powerful than the local version providing animations.
- [Local version](https://img.atcoder.jp/ahc034/vImT4eac.zip): You need a compilation environment of [Rust language](https://www.rust-lang.org/).-   - [Pre-compiled binary for Windows](https://img.atcoder.jp/ahc034/vImT4eac_windows.zip): If you are not familiar with the Rust language environment, please use this instead.

Please be aware that sharing visualization results or discussing solutions/ideas during the contest is prohibited.

```input1
20
10 4 0 0 4 10 16 20 21 16 11 2 -7 -16 -23 -25 -23 -16 -7 2
16 10 6 5 7 10 13 15 14 10 4 -4 -13 -21 -29 -32 -29 -22 -13 -3
20 14 10 8 9 10 11 12 10 6 0 -7 -15 -24 -31 -33 -31 -25 -16 -8
20 15 12 10 10 10 10 11 8 5 0 -5 -12 -20 -26 -29 -28 -23 -15 -7
16 13 12 10 10 10 10 10 9 7 4 1 -4 -10 -16 -20 -20 -17 -10 -3
10 10 10 10 11 10 10 10 10 10 10 9 7 2 -3 -8 -9 -8 -3 3
4 7 9 10 10 10 10 10 11 14 16 18 17 14 9 5 1 1 4 9
0 5 8 10 10 10 10 10 12 15 20 24 25 24 19 14 9 7 9 13
0 6 10 12 11 11 9 9 10 14 20 26 29 28 24 18 13 10 10 14
4 10 14 16 13 10 7 5 6 10 16 23 26 26 23 16 10 8 6 10
11 16 20 21 16 10 4 0 0 4 10 16 21 20 16 10 4 0 1 4
16 23 26 24 18 9 1 -4 -7 -4 2 9 12 12 8 3 -3 -6 -7 -3
20 26 27 24 17 7 -3 -11 -14 -12 -7 -1 2 2 -1 -5 -10 -12 -11 -7
20 24 24 20 13 3 -8 -17 -21 -20 -16 -12 -9 -9 -11 -14 -15 -15 -12 -6
16 18 17 14 6 -3 -13 -20 -24 -25 -23 -21 -20 -19 -21 -21 -18 -15 -10 -3
10 10 8 4 -1 -8 -14 -20 -23 -25 -25 -26 -27 -28 -28 -25 -21 -14 -5 3
4 2 -1 -4 -7 -9 -12 -15 -18 -19 -23 -26 -29 -31 -31 -28 -21 -11 -1 8
0 -4 -7 -9 -9 -8 -7 -7 -8 -11 -16 -20 -26 -30 -31 -28 -20 -8 2 12
0 -6 -9 -10 -7 -3 1 3 3 -1 -7 -13 -20 -26 -29 -27 -20 -9 2 13
4 -3 -6 -6 -3 3 9 12 12 9 3 -5 -12 -20 -25 -26 -21 -12 -1 9
```

```output1
+10
R
+4
R
R
R
R
R
R
R
+50
R
R
R
R
-7
D
-13
L
-44
```