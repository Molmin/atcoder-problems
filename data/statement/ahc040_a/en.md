## Story

AtCoder sells several limited-edition goods featuring its logo.
They have now decided to launch a "Special Set," which bundles these limited-edition goods at a discounted price.
Takahashi is assigned to pack the goods, which are delivered one by one on a conveyor belt, into a single cardboard box and hand it over to a delivery service.
To prepare for the launch, he has decided to practice packing.

Since the shipping cost is proportional to the sum of the width and height of the cardboard box, it is necessary to make an effort to pack the goods into as small a box as possible.
Each good is rectangular, but Takahashi does not have measuring tools, so he estimates the width and height by eye and consults you, an expert in optimization, over the phone.

When you instruct Takahashi on how to arrange the goods over the phone, he follows your instructions and arranges the items accordingly.
He then estimates by eye the width and height of the cardboard box required for that arrangement and reports the results back to you.
Based on that information, you provide new instructions for the arrangement.

Repeat this process to find an arrangement that packs all the goods into as small a cardboard box as possible.

## Problem Statement

You are given $N$ rectangles.
The $i$-th rectangle has width $w_i$ and height $h_i$.
For each rectangle, observed values $w'_i=\mathrm{normal}(w_i, \sigma)$ and $h'_i=\mathrm{normal}(h_i, \sigma)$ are provided as input, which include measurement errors.
Here, $\mathrm{normal}(\mu, \sigma)$ is a function that generates a value through the following steps:

1. Generate a random value from a normal distribution with mean $\mu$ and standard deviation $\sigma$.
2. Round the generated value to the nearest integer.
3. If the resulting value is less than $1$, it is set to $1$, and if it exceeds $10^9$, it is set to $10^9$.

Place these rectangles on a plane in the order of their indices such that they do not overlap.
Each rectangle can be rotated $90^\circ$, swapping its width and height if necessary.

The positive $x$-axis extends to the right, and the positive $y$-axis extends downward.
Rectangles can be placed in the region where $x \geq 0$ and $y \geq 0$.
You are required to specify the placement method as a sequence $(p_0, r_0, d_0, b_0), (p_1, r_1, d_1, b_1), \dots$, such that:

- $p_i$ represents the index of the rectangle to be placed at the $i$-th step ($0 \leq p_i \leq N-1$). **You can try placing only some of the rectangles, but the indices must be in ascending order; in other words, for all $i &amp;lt; j$, $p_i &amp;lt; p_j$ must hold.**
- $r_i$ indicates whether the rectangle should be rotated by $90^\circ$. If $r_i = 0$, the rectangle is not rotated; if $r_i = 1$, the rectangle is rotated.
- $d_i$ specifies the direction in which the rectangle is placed.-   - If $d_i$ is `U`, the rectangle is moved upward until it stops at the bottom edge of another rectangle that has already been placed or at the line $y = 0$.
-   - If $d_i$ is `L`, the rectangle is moved leftward until it stops at the right edge of another rectangle that has already been placed or at the line $x = 0$.
- $b_i$ represents the reference rectangle for placement. $b_i$ must be either $-1$ or the index of a previously placed rectangle.-   - When placing the rectangle upward (`U`), $b_i$ specifies which rectangle’s right edge should align with the left edge of the new rectangle. If $b_i = -1$, the left edge of the rectangle aligns with $x = 0$.
-   - When placing the rectangle leftward (`L`), $b_i$ specifies which rectangle’s bottom edge should align with the top edge of the new rectangle. If $b_i = -1$, the top edge of the rectangle aligns with $y = 0$.

### Example of Operations

In the following example, the third rectangle is placed without rotation, and the results of placement are illustrated for each pair of $(d, b)$.

    
        Operation $(d,b)$
        Before
        (U,-1)
        (U,0)
        (U,1)
        (U,2)
    
    
        Result
        ![](https://img.atcoder.jp/ahc040/RGoXy7re_0.png)
        ![](https://img.atcoder.jp/ahc040/RGoXy7re_1.png)
        ![](https://img.atcoder.jp/ahc040/RGoXy7re_2.png)
        ![](https://img.atcoder.jp/ahc040/RGoXy7re_3.png)
        ![](https://img.atcoder.jp/ahc040/RGoXy7re_4.png)
    
    
        Operation $(d,b)$
        Before
        (L,-1)
        (L,0)
        (L,1)
        (L,2)
    
    
        Result
        ![](https://img.atcoder.jp/ahc040/RGoXy7re_0.png)
        ![](https://img.atcoder.jp/ahc040/RGoXy7re_5.png)
        ![](https://img.atcoder.jp/ahc040/RGoXy7re_6.png)
        ![](https://img.atcoder.jp/ahc040/RGoXy7re_7.png)
        ![](https://img.atcoder.jp/ahc040/RGoXy7re_8.png)
    

Repeat the following operations $T$ times:

1. Specify how to place the rectangles. Note that placement starts from an empty state, not continuing from the previous placement.
2. After placement, let the width (the maximum $x$-coordinate where rectangles exist) be $W$, and the height (the maximum $y$-coordinate where rectangles exist) be $H$. Then, the measured values $W' = \mathrm{normal}(W, \sigma)$ and $H' = \mathrm{normal}(H, \sigma)$ are obtained as the results of the measurement.

## Scoring

Let $W_t$ and $H_t$ be the width and height of the placement at the $t$-th turn, respectively, and let $U_t$ be the set of rectangles that are not used in this turn. Then, the score $s_t$ for the $t$-th turn is defined as follows:

\[
s_t = W_t + H_t + \sum_{i\in U_t}(w_i+h_i)
\]

Then you obtain an absolute score of $\min_t s_t$.
<font color="red">**The lower the absolute score, the better.**</font>

For each test case, we compute the <font color="red">**relative score**</font> $\mathrm{round}(10^9\times \frac{\mathrm{MIN}}{\mathrm{YOUR}})$, where YOUR is your absolute score and MIN is the lowest absolute score among all competitors obtained on that test case. The score of the submission is the sum of the relative scores.

The final ranking will be determined by the system test with more inputs which will be run after the contest is over.
In both the provisional/system test, if your submission produces illegal output or exceeds the time limit for some test cases, only the score for those test cases will be zero, and your submission will be excluded from the MIN calculation for those test cases.

The system test will be performed only for <font color="red">**the last submission which received a result other than CE **</font>.
Be careful not to make a mistake in the final submission.

### Number of test cases

- Provisional test: 50
- System test: 3000. We will publish [seeds.txt](https://img.atcoder.jp/ahc040/seeds.txt) (sha256=1e93374aa02130a1167c2893f1904b4234a3b517d1e7b9d25022a9125ff3777d) after the contest is over.

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

## Input and Output

First, the number of rectangles $N$, the number of operation turns $T$, the standard deviation $\sigma$ of the measurement error, and the measured sizes $w'_i$ and $h'_i$ of each rectangle are given from Standard Input in the following format.

```plain
$N$ $T$ $\sigma$
$w'_0$ $h'_0$
$\vdots$
$w'_{N-1}$ $h'_{N-1}$
```

- The number of rectangles $N$ satisfies $30 \leq N \leq 100$.
- The number of operations $T$ satisfies $N/2 \leq T \leq 4N$.
- The standard deviation of the measurement error $\sigma$ is an integer satisfying $1000 \leq \sigma \leq 10000$.
- The measured values of the width and height, $w'_i$ and $h'_i$, are integers between $1$ and $10^9$ inclusive.

After reading the above information, repeat the following process $T$ times.

Let the sequence representing the rectangle placement method be $(p_0, r_0, d_0, b_0), (p_1, r_1, d_1, b_1), \dots, (p_{n-1}, r_{n-1}, d_{n-1}, b_{n-1})$.
Here, $n$ represents the number of rectangles to place, and $n$ may be less than $N$.
Output this sequence to Standard Output in the following format.

```plain
$n$
$p_0$ $r_0$ $d_0$ $b_0$
$\vdots$ 
$p_{n-1}$ $r_{n-1}$ $d_{n-1}$ $b_{n-1}$
```

After the output, the measured values of the width and height, $W'$ and $H'$, are given from Standard Input in the following format.

```plain
$W'$ $H'$
```

<font color="red">**The output must be followed by a new line, and you have to flush Standard Output.**</font>
Otherwise, the submission might be judged as TLE.

Your program may output comment lines starting with `#`. The web version of the visualizer displays the comment lines at the corresponding timing, which may be useful for debugging and analysis. Since the judge program ignores all comment lines, you can submit a program that outputs comment lines as is.

### Example

$t$
Output
Input

Prior Information

```plain
4 3 1000
77685 46130
32459 75368
54192 88183
60740 42948
```

1
```plain
2
0 0 U -1
1 1 U 0
```
```plain
153220 47195
```

2
```plain
4
0 0 U -1
1 1 L -1
2 1 L 1
3 0 U -1
```
```plain
167543 86611
```

3
```plain
4
0 0 U -1
1 0 L -1
2 0 U -1
3 0 U 2
```
```plain
113031 134437
```

[Show example](https://img.atcoder.jp/ahc040/RGoXy7re.html?lang=en&amp;seed=0&amp;output=sample)

## Sample Solution

This is a sample solution in Python. This program tries to place each rectangle in a random rotation and position $T$ times.

```plain
import random

def query(prdb):
    print(len(prdb))
    for p, r, d, b in prdb:
        print(p, r, d, b)
    W, H = map(int, input().split())
    return W, H

N, T, sigma = map(int, input().split())
wh = [tuple(map(int, input().split())) for _ in range(N)]

rng = random.Random(1234)

for _ in range(T):
    prdb = []
    for i in range(N):
        prdb.append((
            i,
            rng.randint(0, 1),
            ['U', 'L'][rng.randint(0, 1)],
            rng.randint(-1, i - 1),
        ))
    query(prdb)
```

## Input Generation

- $\mathrm{rand}(L,U)$: Generates an integer uniformly at random between $L$ and $U$, inclusive.
- $\mathrm{rand\_double}(L,U)$: Generates a real number uniformly at random between $L$ and $U$, inclusive.

### Generation of $N$, $T$, and $\sigma$

- $N = \mathrm{rand}(30, 100)$
- $T = \mathrm{round}(N \times 2^{\mathrm{rand\_double}(-1, 2)})$
- $\sigma = \mathrm{rand}(1000, 10000)$

### Generation of $w$ and $h$

Let $U = 10^5$, and generate $L = \mathrm{rand}(U/10, U/2)$.<br>
For each $i$, $w_i = \mathrm{rand}(L, U)$ and $h_i = \mathrm{rand}(L, U)$ are generated.

## Tools (Input generator, local tester, and visualizer)

- [Web version](https://img.atcoder.jp/ahc040/RGoXy7re.html?lang=en): This is more powerful than the local version providing animations.
- [Local version](https://img.atcoder.jp/ahc040/RGoXy7re.zip): You need a compilation environment of [Rust language](https://www.rust-lang.org/).-   - [Pre-compiled binary for Windows](https://img.atcoder.jp/ahc040/RGoXy7re_windows.zip): If you are not familiar with the Rust language environment, please use this instead.

Please be aware that sharing visualization results or discussing solutions/ideas during the contest is prohibited.

### Specification of input files used by the tools

The input file provided to the local tester includes additional information in the following format appended to the end of the prior-information given to the solution program.

```plain
$w_0$ $h_0$
$\vdots$
$w_{N-1}$ $h_{N-1}$
$dW_0$ $dH_0$
$\vdots$
$dW_{T-1}$ $dH_{T-1}$
```

- $w_i$ and $h_i$ represent the true width and height of the $i$-th rectangle.
- $dW_t$ and $dH_t$ are the measurement errors added to the results of the $t$-th turn.