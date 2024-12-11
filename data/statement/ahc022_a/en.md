## Story

                    

                        Humanity has discovered another area outside of our world, called `Another Space`. <br>
                        Another Space is represented by an $L \times L$ grid, which forms a torus.
                        This means that moving one square up from the top row will bring you to the bottom row of the same column, and the same applies for left and right movements.
                    

                    

                        To enter Another Space, we use **wormholes**.<br>
                        There are $N$ **wormholes**, each of which is independent and connects our world to one cell in Another Space.
                        The cells in Another Space that are connected to the **wormholes** are called **exit cells**.
                        There are $N$ **exit cells** in Another Space, and each **wormhole** corresponds to one **exit cell**.
                        We know the positions of the **exit cells** on the grid. However, we don't know the specific correspondence between the **wormholes** and the **exit cells**. We want to find this correspondence.
                    

                    

X-san, a great scientist, came up with a plan to estimate the correspondence between the **wormholes** and the **exit cells** using the following steps:

                    

1. X-san would place an air conditioning unit in each cell of Another Space and set an integer temperature for each unit.
2. X-san would repeat the following measurements:
                        1.    - Choose one **wormhole** and enter Another Space through it.
2.    - Perform the predetermined movements within Another Space and measure the temperature of the cell after completing the movements.

                    

It's important to note that there will be errors in the measured temperatures due to the limitations of the measuring equipment.

                    

                        We must be careful when setting the temperatures. The air conditioning units can maintain the temperature within each cell, but if there is a significant temperature difference between adjacent cells, it will consume a considerable amount of energy.<br>
                        Furthermore, measuring the temperatures within Another Space also requires energy, and the more measurements and longer movements are involved, the more energy will be required.
                    

                    

                        As the brilliant assistant, your mission is to devise a plan that allows X-san to estimate the **wormhole** correspondence in Another Space with the least amount of energy possible.
                        Unravel the mystery of the **wormhole** correspondence and pave the way for the future of humanity.
                    

                
                    

## Problem Statement

                    

                        There exists an $L \times L$ grid, where the cell at the $i$-th row ($0 \leq i \lt L$) from the top and $j$-th column ($0 \leq j \lt L$) from the left is denoted as $(i, j)$.
                        The top and bottom, as well as the left and right edges of the grid, are connected in a torus shape.
                        In other words, $(0, j)$ is adjacent to $(L-1, j)$ vertically, and $(i, 0)$ is adjacent to $(i, L-1)$ horizontally.<br>
                        There are $N$ **exit cells** in the grid, and their coordinates are denoted as $(Y_0, X_0), (Y_1, X_1), \ldots, (Y_{N-1}, X_{N-1})$.<br>
                        There exists a permutation $A=(A_0,A_1,\ldots,A_{N-1})$ of the integers $0,1,\ldots,N-1$.
                        This permutation indicates that when entering the $i$-th **wormhole**, one will exit through the $A_i$-th **exit cell**.
                        The values of $A$ are hidden, and the purpose of this problem is to estimate them.
                    

                    

                        The estimation process is achieved through the following steps: **placement**, **measurement**, and **answer**, which are performed in sequence.
                    

                    

### Placement

                    

                        In the **placement** step, assign an integer value ranging from $0$ to $1000$ (inclusive) to each cell in the grid. <br>
                        The assigned value for cell $(i, j)$ is denoted as $P_{i,j} (0 \leq P_{i,j} \leq 1000)$.<br>
                        **Placement_cost** is calculated as the sum of the squares of the differences between the specified values for each cell and its adjacent cells in all directions (up, down, left, and right).<br>
                    

                    

                        **placement_cost** = $\sum_{i=0}^{L-1} \sum_{j=0}^{L-1} ((P_{i,j} - P_{(i+1)\%L,j})^2 + (P_{i,j} - P_{i,(j+1)\%L})^2)$
                    

                    

### Measurement

                    

Perform the following **measurements** 0 or more times, but no more than 10,000 times:

                    

- Specify integers $i$, $y$, and $x$.
- -   - $i$ represents the index of **wormhole**.

- Let $(Y_{A_i}, X_{A_i})$ be the starting coordinates. Move $y$ cells down and $x$ cells to the right from $(Y_{A_i}, X_{A_i})$, resulting in the cell $(r, c)$.
                            If $y$ or $x$ is a negative number, it means moving up by $|y|$ cells or moving left by $|x|$ cells, respectively.
                            -   - In other words, $r \equiv Y_{A_i}+y \pmod L$, $c \equiv X_{A_i}+x \pmod L$ ($0 \leq r,c \lt L$) .
-   - Note that the correspondence between the **wormholes** and the **exit cells** is unknown, so it is unclear which **exit cell** to start the movement from. $(Y_{A_i}, X_{A_i})$ is an unknown value.
- Let $f(\sigma)$ be the function that samples values from a normal distribution with mean $0$ and standard deviation $\sigma$.
- The measured value is obtained as $\mathrm{max}(0, \mathrm{min}(1000, \mathrm{round}(P_{r,c} + f(S))))$.
                            -   - Here, $S$ is a positive integer given as input
-   - Note that the true value of $P_{r, c}$ is unknown.

                    

                        Each **measurement** incurs a cost of $100 * (10 + |y| + |x|)$.<br>
                        The sum of costs for all **measurements** is referred to as the **measurement_cost**.<br>
                        It is allowed to perform **measurements** at the same position repeatedly. Each **measurement** will provide a newly sampled value every time.
                    

                    

### Answer

                    

                        Output the estimated values of $A$ as $E_0, E_1, \ldots , E_{N-1}$.<br>
                    

                
            
            
            
                
                    

## Scoring

                    

                        Let $W$ denote the number of wrong answers out of $N$, i.e., the number of $i$ for which $A_i \ne E_i$, then the evaluation values are as follows.<br>
                        evaluation value = $\lceil (10^{14} * 0.8^W / (\mathrm{placement\_cost} + \mathrm{measurement\_cost} + 10^{5})) \rceil$ <br>
                        Here, $\lceil x \rceil$ represents the smallest integer greater than or equal to $x$.
                    

                    
                    

For each test case, we compute the <font color="red">**relative score**</font> $\mathrm{round}(10^9\times \frac{\mathrm{YOUR}}{\mathrm{MAX}})$, where YOUR is your evaluation value and MAX is the maximum evaluation value among all competitors obtained on that test case. The score of the submission is the sum of the relative scores.

                    

The final ranking will be determined by the system test with more inputs which will be run after the contest is over.
                    In both the provisional/system test, if your submission produces illegal output or exceeds the time limit for some test cases, only the score for those test cases will be zero, and your submission will be excluded from the MAX calculation for those test cases.

                    

The system test will be performed only for <font color="red">**the last submission which received a result other than CE **</font>.
                    Be careful not to make a mistake in the final submission.

                    

### Number of test cases

                    

- Provisional test: 50
- System test: 3000
                            -   - For the system test, there will be 100 data inputs for each $S$.
-   - We will publish [seeds.txt](https://img.atcoder.jp/ahc022/seeds.txt) (sha256=`2154215b63e063812cf2bb0ee2370c5193ae4682a3f7ce260e82a52a07663206`) after the contest is over.

                    

### About Relative Evaluation System

                    

                        In both the provisional/system test, the standings will be calculated using only the last submission which received a result other than CE.
                        Only the last submissions are used to calculate the MAX for each test case when calculating the relative scores.
                    

                    

                        The scores shown in the standings are relative, and whenever a new submission arrives, all relative scores are recalculated.
                        On the other hand, the score for each submission shown on the submissions page is the sum of the evaluation value for each test case, and the relative scores are not shown.
                        In order to know the relative score of submission other than the latest one in the current standings, you need to resubmit it.
                        If your submission produces illegal output or exceeds the time limit for some test cases, the score shown on the submissions page will be 0, but the standings show the sum of the relative scores for the test cases that were answered correctly.
                    

                    

### About execution time

                    

                        Execution time may vary slightly from run to run.
                        In addition, since system tests simultaneously perform a large number of executions, it has been observed that execution time increases by several percents compared to provisional tests.
                        For these reasons, submissions that are very close to the time limit may result in TLE in the system test.
                        Please measure the execution time in your program to terminate the process, or make sure to have enough time margin for the execution.
                    

                
            
            

            
                

                    
                        

## Input and Output

                        

                            **Note: This problem is interactive. Read the following explanation, and communicate with the judge program accordingly.**
                        

                        

At first, problem parameters will be provided from Standard Input in the following format.

> \(
> 
> L ~ N ~ S \\
> 
> Y_0 ~ X_0 \\
> 
> \vdots \\
> 
> Y_{N-1} ~ X_{N-1} \)
                        

- On the 1st line, there are three integers $L,N,S$ separated by spaces.
- -   - $L$ represents the size of the grid and satisfies $10 \le L \le 50$.
-   - $N$ represents the number of **exit cells** and satisfies $60 \le N \le 100$.
-   - $S$ represents the standard deviation used in the calculation of measured value and satisfies $S \in \{i^2 | 1 \leq i \leq 30\}$. Here, $i$ is an integer.

- The following $N$ lines contain the coordinates of the **exit cells**.
- -   - Each line contains space-separated two integers $Y_i$ and $X_i$, representing the coordinates of the $i$-th **exit cell** is $(Y_i, X_i)$.
-   - The integers satisfy $0 \leq Y_i \lt L, 0 \leq X_i \lt L$.
-   - The coordinates all differ from each other and are given in lexicographical order.

                        

After receiving the above input, perform the **placement** step. Output the values of each cell $P_{i, j}$ to Standard Output in the following format.

> \(
> 
> P_{0,0} ~ \cdots ~ P_{0,L-1} \\
> 
> \vdots \\
> 
> P_{L-1,0} ~ \cdots ~ P_{L-1,L-1}\)
                        

- Output $L$ lines, each containing $L$ integers separated by spaces.
- $P_{i, j}$ must be an integer and satisfy $0 \le P_{i, j} \le 1000$.
- If these conditions are not satisfied, the result will be WA.
- <font color="red">**The output must be followed by a new line, and you have to flush Standard Output.**</font> Otherwise, the submission might be judged as TLE.

                        

                            Next, proceed with the **measurement** step. The measurement can be repeated from $0$ to $10000$ times.<br>
                            Output the parameters related to the **measurement** step in the following format to Standard Output:
                        

> \(
> 
> i ~ y ~ x\)
                        

- On a single line, output three integers $i,y,x$ separated by spaces.
- -   - $i$ represents the index of **wormhole**.
-   - $y, x$ represent the distance to move from the **exit cell** corresponding to the $i$-th **wormhole**.
-   - $i, y, x$ must satisfy $0 \leq i \lt N, -L \lt y, x \lt L$. Otherwise, the result will be WA.

- The output must be followed by a new line, and you have to flush Standard Output. Otherwise, the submission might be judged as TLE.

                        

Then, the values obtained from the **measurement** will be provided in the following format from standard input:

> \(
> 
> m\)
                        

- On a single line, there is a single integer $m$.
- -   - $m$ represents the measured value calculated as $\mathrm{max}(0, \mathrm{min}(1000, \mathrm{round}(P_{r,c} + f(S))))$.

- In case of invalid output, $m$ will be `-1`. In that case, terminate the program. If you don't, the result is undefined.
- If the values of $P$ that were output during the **placement** step are invalid, `-1` will be returned during the first **measurement**

                        

When finishing the **measurements** and providing the answer, output the correspondence between the **wormholes** and the **exit cells** to the standard output in the following format:

> \(
> 
> -1 ~ -1 ~ -1 \\
> 
> E_{0} \\
> 
> \vdots \\
> 
> E_{N-1}\)
                        

- On the 1st line, output three integers $-1 \sim -1 \sim -1$ separated by spaces.
                            -   - This represents the end of the **measurements**
- On the following $N$ lines, output the value of $E$, the estimated value of $A$, separated by newlines.
                                -   - $E_{i}$ indicates that the $i$-th **wormhole** is estimated to correspond to the $E_{i}$-th **exit cell**
-   - If $E$ doesn't satisfy $0 \le E_{i} \lt N$, the result will be WA.
-   - You can output a same number multiple times.
- The output must be followed by a new line, and you have to flush Standard Output. Otherwise, the submission might be judged as TLE.

                    
                

                
                    
                        

## Input Generation

                        

- $L, N, S$ are generated by choosing one value uniformly at random from all possible values.
- $Y_{i}, X_{i}$ are generated by selecting N distinct positions uniformly at random from the $L \times L$ grid and lexicographically sorting them
- $A_{i}$ is generated by selecting one permutation uniformly at random from the all possible permutations of the integers $0,1,\ldots,N-1$

                    
                

                
                    
                        

## Tools

                        

- [Web Visualizer / Input Generator](https://img.atcoder.jp/ahc022/u4u4grds7n.html?lang=en): For displaying animated visualizations.
- [Local Tester / Visualizer / Input Generator](https://img.atcoder.jp/ahc022/u4u4grds7n.zip): Please set up a [Rust language](https://www.rust-lang.org/) build environment to use this.
                                -   - [Pre-compiled binary for Windows](https://img.atcoder.jp/ahc022/u4u4grds7n_windows.zip): If you have troubles setting up Rust environment, use this.
- [Sample code (C++, Python)](https://img.atcoder.jp/ahc022/u4u4grds7n_sample.zip): Sample answers. Implemented as follows:
                                -   - Set the value of $P$ to $10 * i$ for the $i$-th **exit cell** position, and set the value to $0$ for positions where there is no **exit cell**.
-   - For each **wormhole**, perform one **measurement** with $y=0$ and $x=0$. Then, estimate the result by selecting the **exit cell** with the $P$ value that is closest to the measured value.

                        

                            <font color="red">**Note that sharing visualization results is forbidden until the contest ends.**</font>
                        

                        

### Input format used in the tools

                        

The input file for the local tester uses the following format.

> \(
> 
> L ~ N ~ S \\
> 
> Y_0 ~ X_0 \\
> 
> \vdots \\
> 
> Y_{N-1} ~ X_{N-1} \\
> 
> A_{0} \\
> 
> \vdots \\
> 
> A_{N-1} \\
> 
> f_{0} \\
> 
> \vdots \\
> 
> f_{9999}\)
                        

$f_{i}$ represents an integer that denotes the error added to the value of $P$ in the $i$-th measurement.

                        

                            The local tester writes outputs from your program directly to the output file.
                            Your program may output comment lines starting with `#`. The web version of the visualizer displays the comment lines with the corresponding **measurements**, which may be useful for debugging and analysis.
                            Since the judge program ignores all comment lines, you can submit a program that outputs comment lines as is.
                        

                    
                
            

            
            
                
                    

## I/O Examples

                    
                        
                            
                                Input
                                Output
                                Explanation
                            
                        
                        
                            
                                
```plain
3 3 1
0 0
0 1
2 1
```
                                
                                
                                
                                    Please note that this input is for explanation purposes, and thus doesn't meet all of the constraints for input.
                                    There are **exit cells** at $(0,0)$, $(0,1)$, and $(2,1)$ in a $3 \times 3$ grid.
                                
                            
                            
                                
                                
```plain
4 1 2
1 2 1
2 9 2
```
                                
                                
                                    As the initial output, perform the **placement** step. Set the values of $P_{i, j}$ corresponding to each cell.
                                
                            
                            
                                 
                                
```plain
0 0 0
```
                                
                                
                                    Next, proceed with the **measurement** step.
                                    In this **measurement**, the 0-th **wormhole** is specified, and there is no movement from the **exit cell**.
                                
                            
                            
                                
```plain
8
```
                                
                                 
                                
                                    A measurement value of $8$ is obtained.
                                
                            
                            
                                 
                                
```plain
1 1 1
```
                                
                                
                                    In the following **measurement**, specify the 1st **wormhole** and target the position obtained by moving down $1$ cell and right $1$ cell from the **exit cell**.
                                
                            
                            
                                
```plain
1
```
                                
                                 
                                
                                    A measurement value of $1$ is obtained.
                                
                            
                            
                                 
                                
```plain
2 1 1
```
                                
                                
                                    Perform the same **measurement** as the previous one for the 2nd **wormhole**.
                                
                            
                            
                                
```plain
1
```
                                
                                 
                                
                                    A measurement value of $1$ is obtained again.
                                
                            
                            
                                 
                                
```plain
-1 -1 -1
2
0
0
```
                                
                                
                                    Finish the **measurements** and provide the **answer**.
                                    The 0-th **wormhole** is estimated to correspond to the 2nd **exit cell** located at $(2, 1)$.
                                    The 1st and 2nd **wormholes** could not be determined, so both are answered to correspond to the 0-th **exit cell**.