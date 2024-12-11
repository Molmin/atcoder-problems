## Story

AtCoder's CEO, Takahashi, loves animals and has a number of pets running free in the AtCoder office.
AtCoder's employees have trouble with the pets interrupting their work, so they have decided to place partitions in the office to create a space where pets cannot come in.
Please create as large a space as possible.

## Problem Statement

There are $N$ pets and $M$ people in a room with a floor of $30 \times 30$ squares.
All squares are initially passable, and outside of the $30 \times 30$ squares are impassable.
Let $(x, y)$ be the coordinates of the square in row $x$ from the top ($1\leq x\leq 30$) and column $y$ from the left ($1\leq y\leq 30$).
Repeat the following process for $300$ turns.

First, you choose each person's action from the following three types, and perform each action simultaneously.

- Do nothing and stay in the current position.
- Choose a square adjacent to the current position and make it impassable. You cannot choose a square that contains pets or humans at the start of this turn. **You cannot choose a square whose adjacent square contains a pet, either.** If you choose a square that is already impassable, nothing happens.
- Move to an adjacent passable square. It is not possible to move to a square that becomes impassable by another person's action in this turn.

After all the people have completed their actions for that turn, each pet moves independently.
Rules for pet movement depend on the type of pet, and some pets may move multiple squares in a single turn.
Details are described later.

Squares containing humans or pets are also passable, and each square can contain any number of humans and pets.

## Scoring

At the end of $300$ turn, for each $i=1,\cdots,M$, let $R_i$ be the set of squares reachable from the final position of person $i$ through only passable squares, and $n_i$ be the number of pets whose final position is in $R_i$.
Then, person $i$ obtains satisfaction of $s_i=\frac{|R_i|}{900}\times 2^{-n_i}$.
The score for the test case is $\mathrm{round}\left(10^8\times\frac{1}{M}\sum_{i=1}^M s_i\right)$.

### Number of test cases

- Provisional test: 100
- System test: 2000. We will publish [seeds.txt](https://img.atcoder.jp/ahc008/seeds.txt) (md5=27bf0702bbe0265900374c3b6b9846b4, sha256=33973e4ded08e3a607fc2e841e14751ff110ae10154b286e7fd5f766ff86d706) after the contest is over.

The score of a submission is the total scores for each test case.
In the provisional test, if your submission produces illegal output or exceeds the time limit for some test cases, the submission itself will be judged as WA or TLE , and the score of the submission will be zero.
In the system test, if your submission produces illegal output or exceeds the time limit for some test cases, only the score for those test cases will be zero.
Note that if your program terminates abnormally, it may be judged as WA instead of RE.

### About execution time

Execution time may vary slightly from run to run.
In addition, since system tests simultaneously perform a large number of executions, it has been observed that execution time increases by several percent compared to provisional tests.
For these reasons, submissions that are very close to the time limit may result in TLE in the system test.
Please measure the execution time in your program to terminate the process, or have enough margin in the execution time.

## Input and Output

First, the initial position and type of each pet, and the initial position of each person are given from Standard Input in the following format

```plain
$N$
$px_1$ $py_1$ $pt_1$
$\vdots$
$px_N$ $py_N$ $pt_N$
$M$
$hx_1$ $hy_1$
$\vdots$
$hx_M$ $hy_M$
```

$N$ is an integer between $10$ and $20$ representing the number of pets.
$(px_i,py_i)$ represents the coordinates of the initial position of the $i$-th pet, and $pt_i$ is an integer between $1$ and $5$ representing the type of the $i$-th pet.
$M$ is an integer between $5$ and $10$ representing the number of humans.
$(hx_i,hy_i)$ represents the coordinates of the initial position of the $i$-th human.
The initial positions of all pets and humans are guaranteed to be distinct.

After reading the above information, repeat the following process $300$ turns.

First, output a string of length $M$ where the $i$-th character represents the action of the $i$th person as follows on a single line to Standard Output.
<font color="red">**After the output, you have to flush Standard Output.**</font> Otherwise, the submission might be judged as TLE .

- `.`: Do nothing and stay in the current position.
- `u`, `d`, `l`, `r`: Let $(x,y)$ be the current position. Make the square $(x-1,y)$, $(x+1,y)$, $(x,y-1)$, or $(x,y+1)$ impassable, respectively.
- `U`, `D`, `L`, `R`: Let $(x,y)$ be the current position. Move to the the square $(x-1,y)$, $(x+1,y)$, $(x,y-1)$, or $(x,y+1)$, respectively.

After the output, $N$ strings are given to Standard Input in a single line, separated by spaces.
The $i$-th string represents movement of the $i$-th pet in that turn.
If the pet does not move, the string is `.`.
If it does move, the string is a sequence of characters `U`, `D`, `L`, and `R` representing the movement of one square up, down, left, and right, respectively.

[Show example](https://img.atcoder.jp/ahc008/f828b9475ffb41d54f05619db6ccbd4f.html?lang=en&amp;show=example)

## Pets Movement Rules

We define a basic move as follows: move to a square chosen at random among the adjacent passable squares. From the condition of the squares that can be made impassable, such squares always exist.

Each pet $i$ performs the following moves depending on $pt_i$, an integer value between $1$ and $5$ representing its type.

1. ![](https://img.atcoder.jp/ahc008/cow.png) Cow: Perform one basic move.
2. ![](https://img.atcoder.jp/ahc008/pig.png) Pig: Perform two basic moves.
3. ![](https://img.atcoder.jp/ahc008/rabbit.png) Rabbit: Perform three basic moves.
4. ![](https://img.atcoder.jp/ahc008/dog.png) Dog: Move toward a target person as follows. The first turn starts with no target. If it has no target, the target person is in the current position, or there exists no path to the target person, then it selects one person uniformly at random among those reachable from the current position, excluding those in the current position. If there is no such person, reset to no target and perform one basic move. Otherwise, move to an adjacent passable square that shortens the shortest distance to the target person (if there are multiple such squares, choose one of them uniformly at random), and then perform one basic move. If it reaches the destination after the first or the second move, reset to no target.
5. ![](https://img.atcoder.jp/ahc008/cat.png) Cat: Move toward a target square as follows. The first turn starts with no target. If it has no target or there exists no path to the target square, then it selects one square uniformly at random among those reachable from the current position, excluding the current position. If there exists no such square, do nothing. Otherwise, move to an adjacent passable square that shortens the shortest distance to the target square (if there are multiple such squares, choose one of them uniformly at random), and then perform one basic move. If it reaches the destination after the first or the second move, reset to no target.

## Input Generation

Let $\mathrm{rand}(L,U)$ be a function that generates a uniform random integer between $L$ and $U$, inclusive.

We generate the number of pets by $N=\mathrm{rand}(10, 20)$.
The initial position of each pet is chosen uniformly at random from the coordinates that have not been chosen yet.
We generate the type of each pet by $pt_i=\mathrm{rand}(1, 5)$.

We generate the number of humans by $M=\mathrm{rand}(5, 10)$.
The initial position of each human is chosen uniformly at random from the coordinates that have not been chosen yet.

## Tools

- [Local tester](https://img.atcoder.jp/ahc008/tools_v3.zip): You need a compilation environment of [Rust language](https://www.rust-lang.org/).-   - For those who are not familiar with the Rust language environment, we have prepared a pre-compiled binary for Windows. [tools_x86_64-pc-windows-gnu.zip](https://img.atcoder.jp/ahc008/tools_x86_64-pc-windows-gnu_v3.zip)
-   - &lt;font color="red"&gt;The first version contained a bug in the cat's movement, which has been fixed at 130 minutes after the contest started. Please re-download it.&lt;/font&gt;
-   - We have added more examples in README. If you don't know how to use the tools, please refer to README. Also, as stated in the rules, you are free to share information on how to run the provided tools.
- [Web visualizer](https://img.atcoder.jp/ahc008/f828b9475ffb41d54f05619db6ccbd4f.html?lang=en): By pasting the output generated by the local tester into the Output field, you can display the animation of the execution result.

<font color="red">You are allowed to share output images (png or gif) of the provided visualizer for seed=0 on twitter during the contest.</font> You have to use the specified hashtag and public account. You can only share visualization results and scores for seed=0. Do not share scores for other seeds or mention solutions or discussions. [List of shared images.](https://twitter.com/search?q=%23AHC008%20%23visualizer&amp;src=typed_query&amp;f=live)

### Specification of input/output files used by the tools

Input files for the local tester consist of the prior information (the initial position and type of each pet, and the initial position of each person) followed by a random seed value to generate pet movements.
Since the pet's movement depends on human actions, the input file contains only the random seed value and not specific movements.
The local tester writes outputs from your program directly to the output file.
Your program may output comment lines starting with `#`.
The web version of the visualizer displays the comment lines at the time they are output, which may be useful for debugging and analysis.
Since the judge program ignores all comment lines, you can submit a program that outputs comment lines as is.