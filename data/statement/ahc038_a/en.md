## Story

CEO Takahashi, who loves [takoyaki](https://en.wikipedia.org/wiki/Takoyaki) (japanese food), is developing a robotic arm to assist in moving takoyaki on a takoyaki cooker.
On the takoyaki cooker represented by a 2D grid, several takoyaki are placed on some of the grid squares.
Using a robotic arm, you need to move the takoyaki from these squares to a specified set of target squares.
The robotic arm has multiple fingertips and is structured as a tree, with joints and fingertips as its vertices.
In a single turn, the robotic arm can simultaneously perform the following actions: move the entire arm up, down, left, or right; rotate around a joint by 90 degrees; grab or release takoyaki with its fingertips.
Design the robotic arm and determine the operation method to reduce the number of turns as much as possible.

![example](https://img.atcoder.jp/ahc038/GhBuR36w.gif)

## Problem Statement

There is an $N \times N$ takoyaki cooker.
Let $(0,0)$ be the coordinates of the top-left square and $(i,j)$ be the coordinates of the square located $i$ squares down and $j$ squares to the right from there.

Initially, takoyaki are placed on $M$ different squares, and you need to move them to $M$ specified target squares.

First, you must design the robotic arm.
The robotic arm is represented as a tree where the "joints" and "fingertips" are the vertices, and the rigid segments connecting them are the edges.<br>
The fingertips correspond to the leaves of the tree, while the joints correspond to the other vertices.<br>
The length of the edge connecting vertex $u$ and its child $v$ is denoted as $L(u,v)$.  

You are given the number of vertices $V$ available for the robotic arm, and your task is to design a tree with no more than $V$ vertices and output it along with the initial position of the root.
The length of each edge $L(u,v)$ must be an integer satisfying $1 \leq L(u,v) \leq N-1$.

Next, you must operate the designed robotic arm to move the takoyaki.
Starting from the initial position where the root is at the specified position and all edges extend to the right, you can perform the following operations independently each turn:

1. You can move the entire robotic arm one square up, down, left, or right. The new coordinates of the root $(x,y)$ must satisfy $0 \leq x, y \leq N-1$.
2. For each vertex $u$ other than the root, you can independently rotate the entire subtree rooted at $u$ by 90 degrees either counterclockwise or clockwise around its parent $p$.
3. For each fingertip, you can independently place the takoyaki it is holding on the current square, or pick up a takoyaki from the current square. You cannot place a takoyaki on a square that already contains one or outside the $N \times N$ grid. Each fingertip cannot hold more than one takoyaki at the same time.

### Example of Operation 2

    ![](https://img.atcoder.jp/ahc038/GhBuR36w_1.png)
    ➡
    ![](https://img.atcoder.jp/ahc038/GhBuR36w_2.png)
    ➡
    ![](https://img.atcoder.jp/ahc038/GhBuR36w_3.png)

Starting from the left figure, rotating the entire subtree rooted at vertex 1 by 90 degrees clockwise around vertex 0 results in the middle figure.<br>
Furthermore, rotating the entire subtree rooted at vertex 3 by 90 degrees clockwise around vertex 1 results in the right figure.

Operations are performed in the order of 1 and 2 first, followed by 3.
In operation 3, the fingertips are processed in order from the smallest vertex number to the largest (the order within 1 and 2 does not affect the result).
It is allowed for part of the robotic arm to extend outside the $N \times N$ grid after an operation, and multiple vertices of the robotic arm can occupy the same square.

You can perform up to $10^5$ turns.

## Scoring

Let $K$ be the number of turns, and let $M'$ be the number of takoyaki at the target positions at the end of the operations.<br>
Then, you will obtain the following absolute score.
<font color="red">**The lower the absolute score, the better.**</font>

- If $M'=M$, $K$
- If $M'&lt;M$, $10^5+1000\times (M-M')$

For each test case, we compute the <font color="red">**relative score**</font> $\mathrm{round}(10^9\times \frac{\mathrm{MIN}}{\mathrm{YOUR}})$, where YOUR is your absolute score and MIN is the lowest absolute score among all competitors obtained on that test case. The score of the submission is the sum of the relative scores.

The final ranking will be determined by the system test with more inputs which will be run after the contest is over.
In both the provisional/system test, if your submission produces illegal output or exceeds the time limit for some test cases, only the score for those test cases will be zero, and your submission will be excluded from the MIN calculation for those test cases.

The system test will be performed only for <font color="red">**the last submission which received a result other than CE **</font>.
Be careful not to make a mistake in the final submission.

### Number of test cases

- Provisional test: 50
- System test: 2000. We will publish [seeds.txt](https://img.atcoder.jp/ahc038/seeds.txt) (sha256=c5e999464ec12906e690f995b8d1db2a03a87eec65faff2cecf01263dd035c68) after the contest is over.

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

> $N$ $M$ $V$
> 
> $s_{0,0}\cdots s_{0,N-1}$
> 
> $\vdots$
> 
> $s_{N-1,0}\cdots s_{N-1,N-1}$
> 
> $t_{0,0}\cdots t_{0,N-1}$
> 
> $\vdots$
> 
> $t_{N-1,0}\cdots t_{N-1,N-1}$

- The size of the grid $N$ is an integer that satisfies $15 \leq N \leq 30$.
- The number of takoyaki $M$ is an integer that satisfies $N^2/10 \leq M \leq N^2/2$.
- The number of vertices $V$ available for the robotic arm is an integer that satisfies $5 \leq V \leq 15$.
- $s_{i,0} \cdots s_{i,N-1}$ is a string of length $N$ consisting of `01`. If the $j$-th character is `1`, it means that a takoyaki is initially placed on square $(i,j)$. The total number of squares with takoyaki is exactly $M$.
- $t_{i,0} \cdots t_{i,N-1}$ is a string of length $N$ consisting of `01`. If the $j$-th character is `1`, it means that square $(i,j)$ is a target position. The total number of target squares is exactly $M$.

## Output

Let $V'$ be the number of vertices in the designed robotic arm, where $1 \leq V' \leq V$.<br>
The vertices of the robotic arm are numbered from $0$ to $V'-1$ such that vertex $0$ is the root, and the parent of vertex $u$ is a vertex with a number smaller than $u$.<br>
Let $p_u$ ($0 \leq p_u \leq u-1$) be the parent of vertex $u$ ($1 \leq u \leq V'-1$), and let the length of the edge $(p_u, u)$ be $L(p_u, u)$, where $1 \leq L(p_u, u) \leq N-1$.<br>
Let the coordinates of the root in the initial state be $(x, y)$, where $0 \leq x, y \leq N-1$.
Then, output to Standard Output in the following format.

> $V'$
> 
> $p_1$ $L(p_1, 1)$
> 
> $\vdots$
> 
> $p_{V'-1}$ $L(p_{V'-1}, V'-1)$
> 
> $x$ $y$

Next, output the sequence of operations.<br>
Each turn's operation is represented by a string $S$ of length $2V'$ as follows:

- The $0$-th character represents the movement of the entire robotic arm by one square up (`U`), down (`D`), left (`L`), right (`R`), or no movement (`.`).
- The $i$-th character ($1 \leq i \leq V'-1$) represents the rotation of the entire subtree rooted at vertex $i$ around $p_i$: counterclockwise by 90 degrees is represented by `L`, clockwise by 90 degrees is represented by `R`, and no rotation is represented by `.`.
- The $(V' + i)$-th character ($0 \leq i \leq V'-1$) represents the action of vertex $i$. If the vertex is not a fingertip (leaf) or no action is taken, it is represented by a `.`. If the fingertip grabs or releases a takoyaki, it is represented by `P`.

Let $T$ be the number of turns, and let $S_t$ represent the string for the $t$-th turn.
Output to Standard Output in the following format.

> $S_0$
> 
> $\vdots$
> 
> $S_{T-1}$

[Show example](https://img.atcoder.jp/ahc038/GhBuR36w.html?lang=en&amp;seed=sample&amp;output=sample)

## Sample Solution(Python)

Here is a sample solution in Python.
In this program, a two-vertex tree with an edge of length 1 is created, and the takoyaki is transported to the destination by moving randomly for 100 turns.

> import random
> 
> 
> 
> random.seed(42)
> 
> DX = [0, 1, 0, -1]
> 
> DY = [1, 0, -1, 0]
> 
> DIR = ['R', 'D', 'L', 'U']
> 
> 
> 
> # read input
> 
> N, M, V = map(int, input().split())
> 
> s = [list(map(int, list(input()))) for _ in range(N)]
> 
> t = [list(map(int, list(input()))) for _ in range(N)]
> 
> 
> 
> # design the tree
> 
> tree = [[0, 1]]
> 
> print(len(tree) + 1)
> 
> for p, L in tree:
> 
>     print(p, L)
> 
> 
> 
> # decide the initial position
> 
> rx, ry = 0, 0
> 
> print(rx, ry)
> 
> 
> 
> dir1 = 0 # direction of edge (0, 1)
> 
> holding = False # whether holding a takoyaki
> 
> 
> 
> for turn in range(100):
> 
>     S = []
> 
>     # random move
> 
>     dir = random.randint(0, 3)
> 
>     dx, dy = DX[dir], DY[dir]
> 
>     if 0 <= rx + dx < N and 0 <= ry + dy < N:
> 
>         rx += dx
> 
>         ry += dy
> 
>         S.append(DIR[dir])
> 
>     else:
> 
>         S.append('.')
> 
>     # random rotate
> 
>     rot = random.randint(0, 2)
> 
>     if rot == 0:
> 
>         S.append('.')
> 
>     elif rot == 1:
> 
>         S.append('L')
> 
>         dir1 = (dir1 + 3) % 4
> 
>     else:
> 
>         S.append('R')
> 
>         dir1 = (dir1 + 1) % 4
> 
>     # grab or release takoyaki
> 
>     x, y = rx + DX[dir1], ry + DY[dir1]
> 
>     change = False
> 
>     if 0 <= x and x < N and 0 <= y and y < N:
> 
>         if s[x][y] == 1 and t[x][y] == 0 and not holding:
> 
>             change = True
> 
>             s[x][y] = 0
> 
>             holding = True
> 
>         elif s[x][y] == 0 and t[x][y] == 1 and holding:
> 
>             change = True
> 
>             s[x][y] = 1
> 
>             holding = False
> 
>     S.append('.') # vertex 0 (root) is not a leaf
> 
>     if change:
> 
>         S.append('P')
> 
>     else:
> 
>         S.append('.')
> 
>     # output the command
> 
>     print(''.join(S))

## Input Generation

Let $\mathrm{rand}(L,U)$ be a function that generates a uniform random integer between $L$ and $U$, inclusive.
Let $\mathrm{rand\_double}(L,U)$ be a function that generates a uniform random floating-point number between $L$ and $U$, inclusive.

The values of $N$, $M$, and $V$ are uniformly generated as random integers within the specified ranges.<br>
The initial positions of the takoyaki are generated as follows:

First, initialize the weight array $w$ of size $N \times N$ with zeros.<br>
Repeat the following process $\mathrm{rand}(1, 5)$ times:

- Generate a center $(cx, cy)$ where $cx = \mathrm{rand\_double}(-1, N)$ and $cy = \mathrm{rand\_double}(-1, N)$.
- Generate a coefficient $a$ where $a = \mathrm{rand\_double}(0, 1)$.
- Generate $\sigma$ where $\sigma = \mathrm{rand\_double}(2, 5)$.
- For each square $(i, j)$, add $a \exp(-((i - cx)^2 + (j - cy)^2) / (2 \sigma^2))$ to $w_{i,j}$.

Then, using probabilities proportional to the obtained weights $w_{i,j}$, extract $M$ squares without replacement to determine the initial positions of the takoyaki.

The target positions for the takoyaki are generated in the same way.<br>
If the number of squares that are included in the initial positions but not in the target positions, or vice versa, is less than $M$, redo the generation of both the initial positions and the target positions.

## Tools (Input generator and visualizer)

- [Web version](https://img.atcoder.jp/ahc038/GhBuR36w.html?lang=en): This is more powerful than the local version providing animations.
- [Local version](https://img.atcoder.jp/ahc038/GhBuR36w.zip): You need a compilation environment of [Rust language](https://www.rust-lang.org/).-   - [Pre-compiled binary for Windows](https://img.atcoder.jp/ahc038/GhBuR36w_windows.zip): If you are not familiar with the Rust language environment, please use this instead.

Please be aware that sharing visualization results or discussing solutions/ideas during the contest is prohibited.

```input1
4 3 4
0000
1010
0000
0100
0100
0001
1000
0000
```

```output1
4
0 1
1 1
1 2
0 0
RRL...PP
R..R..P.
DRR...P.
D.....PP
```

This is an example of input and output, visualized at the beginning of the problem statement.
This example does not satisfy the input constraints.