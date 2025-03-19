## Problem Statement

There is a cave represented by an $N \times N$ grid.
Let $(0,0)$ be the coordinates of the top-left square, and $(i,j)$ be the coordinates of the square located $i$ squares down and $j$ squares to the right from there.
The cave is surrounded by walls, and it is not possible to move outside.

Inside the cave, there are rocks and $M$ types of ores scattered across the grid.
Additionally, there are $M$ distinct squares that contain holes, and you need to drop all ores of type $i$ into the $i$-th hole.
**Rocks may be dropped into any hole or left inside the cave.**
You can perform the following operations at most $10000$ times.

1. Move to an adjacent square in any of the four directions (up, down, left, or right). **You can move even if the destination square contains a hole, rock, or ore.**
2. Carry a rock or ore at your current position to an adjacent square in any of the four directions. **The destination must not already contain another rock or ore. The destination may be a hole.** If the destination is a hole, the rock or ore falls into it and is removed. Your position moves to the destination square.
3. Roll the rock or ore at your current position in one of the four directions. The rolled rock or ore continues moving in a straight line until it either collides with a rock, ore, or wall, or falls into a hole. Your position does not change.

The rolling operation is processed in more detail through the following repeated steps:

1. If the adjacent square in the rolling direction is a hole, the rock or ore falls into it and is removed.
2. If the adjacent square in the rolling direction contains a rock or ore, or if it is outside the $N \times N$ grid, the rock or ore stops in the current square.
3. Otherwise, it moves to the adjacent square and repeats the process.

The rolling speed is very fast, so the rock or ore will always stop or fall into a hole before your next action.

Your goal is to drop all ores into their corresponding holes using as few actions as possible.

## Scoring

Let $T (\leq 10000)$ be the length of the output action sequence, $K$ be the total number of ores in the initial grid, and $A$ be the total number of ores successfully dropped into the correct holes. The score is calculated as follows:

- If $A = K$, then the score is $\mathrm{round}(10^6 \times (1+\log_2{\frac{10000}{T}}))$.
- If $A &lt; K$, then the score is $\mathrm{round}(10^6 \times \frac{A}{K})$.

The problem is divided into three subproblems: A, B, and C, based on different input generation methods.
Each subproblem contains 150 test cases, and the total score for a submission to that subproblem is the sum of the scores from all test cases in it.
If your submission produces an illegal output or exceeds the time limit for some test cases, the submission itself will be judged as WA or TLE , and the score of the submission will be zero.

The final ranking is determined by the sum of the highest scores obtained for each subproblem, and there will be no system test after the contest.
If more than one team gets the same score, they will be ranked in the same place regardless of the submission time.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $C_0$
> 
> $\vdots$
> 
> $C_{N-1}$

- The grid size $N$ is fixed at $N = 20$ for all test cases.
- The number of ore types $M$ is fixed for each subproblem. See the **"Input Generation"** section for details.
- For each $i = 0, 1, \dots, N-1$, $C_i$ is a string of length $N$, where the $j$-th character represents the initial state of square $(i, j)$ as follows:-   - `@`: A rock is present.
-   - `a`-`z`: An ore is present.
-   - `A`-`Z`: A hole is present.
-   - `.`: The square is empty.

Ores and holes correspond based on uppercase and lowercase letters.
For example, an ore represented by the character `a` corresponds to the hole represented by the character `A`.
The first $M$ letters of the alphabet are used. There may be multiple ores of the same type, but there is exactly one hole for each type.

You start at the square containing hole `A` in the initial state.

## Output

The operation at step $t$ is represented by a pair $(a_t, d_t)$, where $a_t \in \{1,2,3\}$ denotes the action type (1:Move, 2:Carry, 3:Roll), and $d_t \in \{U,D,L,R\}$ represents the direction (Up, Down, Left, Right).

For example, $(3, R)$ denotes the action of rolling the rock or ore at the current position to the right.

Then, output to Standard Output in the following format.

> $a_0$ $d_0$
> 
> $\vdots$
> 
> $a_{T-1}$ $d_{T-1}$

## Sample Solution

A sample solution in Python is provided.
This program carries rocks or ores located to the right of the initial position into the hole and rolls rocks or ores located below the initial position into the hole.
All other rocks and ores are left untouched.

> N, M = map(int, input().split())
> 
> grid = [list(input()) for _ in range(N)]
> 
> 
> 
> # Retrieve the current position
> 
> pi = 0
> 
> pj = 0
> 
> for i in range(N):
> 
>     for j in range(N):
> 
>         if grid[i][j] == 'A':
> 
>             pi = i
> 
>             pj = j
> 
> 
> 
> # Move to the right and carry any rock or ore found into the hole
> 
> for j in range(pj + 1, N):
> 
>     if grid[pi][j] == '@' or 'a' <= grid[pi][j] and grid[pi][j] <= 'z':
> 
>         print('1 R\n' * (j - pj), end='')
> 
>         print('2 L\n' * (j - pj), end='')
> 
>     elif 'A' <= grid[pi][j] and grid[pi][j] <= 'Z':
> 
>         break
> 
> 
> 
> # Move downward and roll any rock or ore found into the hole
> 
> for i in range(pi + 1, N):
> 
>     if grid[i][pj] == '@' or 'a' <= grid[i][pj] and grid[i][pj] <= 'z':
> 
>         print('1 D\n' * (i - pi), end='')
> 
>         print('3 U\n', end='')
> 
>         pi = i
> 
>     elif 'A' <= grid[i][pj] and grid[i][pj] <= 'Z':
> 
>         break

## Input Generation

The input generation method differs for each subproblem.
The inputs are roughly generated as shown in the table below.

Subproblem
M
Rocks

A
1
Few

B
3
None

C
1
Many

### Subproblem A

$M = 1$ is fixed.

- Placement of hole `A`: Randomly select one square from the $N^2$ squares.
- Placement of ore `a`: Randomly select $2N$ squares from the remaining $N^2 - 1$ squares.
- Placement of rocks `@`: Randomly select $2N$ squares from the remaining $N^2 - 1 - 2N$ squares.

### Subproblem B

$M = 3$ is fixed.

- Placement of holes `A`, `B`, and `C`: Randomly select three distinct squares from the $N^2$ squares.
- Placement of ore `a`: Randomly select $N$ squares from the remaining $N^2 - 3$ squares.
- Placement of ore `b`: Randomly select $N$ squares from the remaining $N^2 - 3 - N$ squares.
- Placement of ore `c`: Randomly select $N$ squares from the remaining $N^2 - 3 - 2N$ squares.

Finally, ensure that **from each hole, it is possible to reach all corresponding ores by passing only through empty squares or squares containing that ore.**
If there exists an ore that is unreachable, the generation process is repeated.

### Subproblem C

$M = 1$ is fixed.

- <p>Placement of rocks `@`: For each square $(i, j)$, generate $h_{i,j} = \mathrm{noise}(i/10, j/10)$. Here, $\mathrm{noise}(y, x)$ is a function that generates two-dimensional [Perlin noise](https://en.wikipedia.org/wiki/Perlin_noise). The top $N^2/2$ squares with the highest $h_{i,j}$ values are assigned rocks.</p>
- <p>Placement of hole `A`: Randomly select one square from the remaining $N^2/2$ squares.</p>
- Placement of ore `a`: Randomly select $2N$ squares from the remaining $N^2/2 - 1$ squares.

## Tools (Input generator and score calculation)

- [Local version](https://img.atcoder.jp/masters2025-qual/ioV2Ybuy.zip): You need a compilation environment of [Rust language](https://www.rust-lang.org/).-   - [Pre-compiled binary for Windows](https://img.atcoder.jp/masters2025-qual/ioV2Ybuy_windows.zip): If you are not familiar with the Rust language environment, please use this instead.

Please be aware that sharing visualization results or discussing solutions/ideas outside of the team during the contest is prohibited.

```input1
20 1
..a.@....a.....a....
..@........@..a.@a@.
..aa...a..@.....a...
.............a.....@
.....@.a.....a@@....
..a..a@..a......@...
.@a.@aa...........a@
...............@.a..
.a......@@@.a.......
........@.@..a.....a
.a.A..a....@....a..@
......@..@@.........
..@@....a..@@.a.....
......a.....@..a....
...................a
@@.....@....a.a.a...
.....@.......a...@..
...@......@...a....a
............a..@....
.......a.@..........
```

```output1
1 R
1 R
1 R
2 L
2 L
2 L
1 R
1 R
1 R
1 R
1 R
1 R
1 R
1 R
2 L
2 L
2 L
2 L
2 L
2 L
2 L
2 L
1 R
1 R
1 R
1 R
1 R
1 R
1 R
1 R
1 R
1 R
1 R
1 R
1 R
2 L
2 L
2 L
2 L
2 L
2 L
2 L
2 L
2 L
2 L
2 L
2 L
2 L
1 R
1 R
1 R
1 R
1 R
1 R
1 R
1 R
1 R
1 R
1 R
1 R
1 R
1 R
1 R
1 R
2 L
2 L
2 L
2 L
2 L
2 L
2 L
2 L
2 L
2 L
2 L
2 L
2 L
2 L
2 L
2 L
1 D
1 D
3 U
1 D
1 D
1 D
1 D
1 D
3 U
```