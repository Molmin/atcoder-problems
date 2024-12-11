![](https://img.atcoder.jp/ahc018/a8a5bc5edd5e6d6301e8f4bd11f3c531.gif)

                    

## Problem Statement

                    

                        There is plot of land, represented by a grid of $N$ rows and $N$ columns.<br>
                        On the grid, there are **water sources** in $W$ spots, and **houses** in $K$ spots.<br>
                        Let us call the cell on $i$th ($0 \leq i \lt N$) row from top and $j$th column ($0 \leq j \lt N$) from left, $(i, j)$.<br>
                        Each cell $(i, j)$ has an associated integer $S_{i,j}$ between $10$ and $5000$ (inclusive), representing the **sturdiness** of the **bedrock** of the cell. The **sturdiness** is pre-determined, but it's not given as a part of the input.<br>
                    

                    

                        When the **bedrock** of a cell containing a **water source** is crushed, water flows into the cell.<br>
                        Furthermore, with cells with flowing water as starting points, water will flow horizontally and vertically into neighboring cells with crushed **bedrock** and span every cell it can reach this way.<br>
                        X-san, who is in charge of the land, wants to crush **bedrock** to build watercourses to make the water flow into every cell with **houses**.<br>
                        Please note that for water to flow into a cell with a **house**, the **bedrock** of that cell must be crushed too.<br>
                    

                    

                        To crush **bedrock**, X-san repeatedly performs **excavations** as explained below.<br>
                        

- Choose a cell $(i, j)$ whose **bedrock** isn't crushed yet, and a positive integer $P$ less or equal than $5000$, representing **power**.
- As $C+P$ ($C$ is a positive integer received as an input) of X-san's **stamina** gets consumed, the **sturdiness** $S_{i,j}$ of the **bedrock** in the cell diminishes by $P$.
- If **sturdiness** then reaches zero $S_{i,j} \leq 0$, the **bedrock** of the cell $(i, j)$ gets crushed.

                    

                    

                        Make the water flow into every cell with a **house**, while trying to conserve X-san's **stamina** as much as possible.
                    

                
            
            
            
                
                    

## Scoring

                    

For each test case, we compute the <font color="red">**relative score**</font> $\mathrm{round}(10^9\times \frac{\mathrm{MIN}}{\mathrm{YOUR}})$, where YOUR is your stamina consumption and MIN is the lowest stamina consumption among all competitors obtained on that test case. The score of the submission is the sum of the relative scores.

                    

The final ranking will be determined by the system test with more inputs which will be run after the contest is over.
                    In both the provisional/system test, if your submission produces illegal output or exceeds the time limit for some test cases, only the score for those test cases will be zero, and your submission will be excluded from the MIN calculation for those test cases.

                    

The system test will be performed only for <font color="red">**the last submission which received a result other than CE **</font>.
                    Be careful not to make a mistake in the final submission.

                    

### Number of test cases

                    

- Provisional test: 50
- System test: 3000
                            -   - For the system test, there will be 375 data inputs for each $C$ ($C \in \{ 1,2,4,8,16,32,64,128 \}$)
-   - We will publish [seeds.txt](https://img.atcoder.jp/ahc018/seeds.txt) (sha256=`3bbc58026730d18fcb0e03ead929ab2afb6f9f0c5eb7f0c10ac44df4e6b84a3f`) after the contest is over.

                    

### About Relative Evaluation System

                    

                        In both the provisional/system test, the standings will be calculated using only the last submission which received a result other than CE.
                        Only the last submissions are used to calculate the MIN for each test case when calculating the relative scores.
                    

                    

                        The scores shown in the standings are relative, and whenever a new submission arrives, all relative scores are recalculated.
                        On the other hand, the score for each submission shown on the submissions page is the sum of the stamina consumption for each test case, and the relative scores are not shown.
                        In order to know the relative score of submission other than the latest one in the current standings, you need to resubmit it.
                        If your submission produces illegal output or exceeds the time limit for some test cases, the score shown on the submissions page will be 0, but the standings show the sum of the relative scores for the test cases that were answered correctly.
                    

                    

### About execution time

                    

                        Execution time may vary slightly from run to run.
                        In addition, since system tests simultaneously perform a large number of executions, it has been observed that execution time increases by several percents compared to provisional tests.
                        For these reasons, submissions that are very close to the time limit may result in TLE in the system test.
                        Please measure the execution time in your program to terminate the process, or make sure to have enough time margin for the execution.
                    

                
            
            

            
                
                    
                        

## Input and Output

                        

                            **Note: This problem is interactive. Read the following explanation, and communicate with the judge program accordingly.**
                        

                        

                            At first, input will be provided via stdin in the following format.
                        

> \(
> 
> N ~ W ~ K ~ C \\
> 
> a_0 ~ b_0 \\
> 
> \vdots \\
> 
> a_{W-1} ~ b_{W-1} \\
> 
> c_0 ~ d_0 \\
> 
> \vdots \\
> 
> c_{K-1} ~ d_{K-1}\)

                        

                            

- On the 1st row, there are four integers $N,W,K,C$ separated by spaces.
                                    -   - $N$ represents the size of the plot and is $N = 200$.
-   - $W$ represents the number of the **water sources** and satisfies $1 \leq W \leq 4$.
-   - $K$ represents the number of the **houses** and satisfies $1 \leq K \leq 10$.
-   - $C$ is a parameter related to **stamina** consumption and satisfies $C \in \{ 1,2,4,8,16,32,64,128 \}$.
- The following $W+K$ rows contain the coordinates of the cells containing **water sources** and **houses**, each expressed as a pair of space-separated integers.
                                    -   - First $W$ rows contain pairs of integers $a_i, b_i$, representing cells $(a_i, b_i)$ that contain **water sources**. The integers satisfy $0 \leq a_i, b_i \lt N$.
-   - Following $K$ rows contain pairs of integers $c_i, d_i$, representing cells $(c_i, d_i)$ that contain **houses**. The integers satisfy $0 \leq c_i, d_i \lt N$.
-   - Each pair of **water sources**, each pair of **houses** and each pair of **water sources** and **houses** are guaranteed to be separated by at least [Manhattan distance](https://en.wikipedia.org/wiki/Taxicab_geometry) of $\mathrm{round}(400/(W+K))$.

                        

                        

                            After receiving the input this far, please output how to perform **excavations** to stdout in the following format.<br>
                        

> \(y ~ x ~ P\)

                        

                            

- On a single row, output three integers $y,x,P$ separated by spaces.
                                    -   - An **excavation** will be performed at cell $(y,x)$ with **power** $P$.
-   - The **bedrock** on cell $(y,x)$ must not be crushed yet, and **power** must satisfy $1 \leq P \leq 5000$. If these conditions are not met, the result will be WA.
-   - You must &lt;font color="red"&gt;**output a newline after the integers, and flush stdout**&lt;/font&gt;. If you don't, the result might turn out to be TLE.

                        

                        

                            After the output, the result of the performed **excavation** will be provided as an input in the following format.
                        

> \(r\)

                        

                            

- On a single row, there is a single integer $r$.
                                    -   - If the **bedrock** of the designated cell doesn't get crushed, $r$ will be `0`.
-   - If the **bedrock** of the designated cell gets crushed; in case there are still cells with **houses** without flowing water, $r$ will be `1`, and in the case every cell with a **house** has flowing water, $r$ will be `2`.
-   - In case of invalid output, $r$ will be `-1`.
- In case of $r \in \{-1, 2\}$, please exit the program immediately. If you fail to do so, the result might turn out to be TLE.
- In case of $r \in \{0, 1\}$, there still exists cells with **houses** without flowing water; in that case, you need to continue performing **excavations**. Please continue receiving input and providing output how to perform **excavations** until $r \in \{-1, 2\}$.

                        

                    
                

                
                    
                        

## Input Generation

                        
                            

Let $\mathrm{rand}(L,U)$ be a function that generates a uniform random integer between $L$ and $U$, inclusive, and $\mathrm{randf}(L,U)$ be a function that generates a uniform random real number between $L$ and $U$, inclusive, and $\mathrm{pow}(b,p)$ be a function that returns $b$ to the power of $p$.

                            

### Generating $S_{i,j}$

                            

1. Let $\mathrm{noise}(y,x,seed)$ be a function that generates two-dimensional [Perlin noise](https://en.wikipedia.org/wiki/Perlin_noise) scaled to range $-1.0$ - $1.0$, inclusive, according to a random seed $seed$.<br>
                                    Select parameters as the following.<br>
                                    1.    - $f0 = \mathrm{randf}(2.0,8.0)$
2.    - $f1 = \mathrm{randf}(10.0,20.0)$
3.    - $dy0 = \mathrm{randf}(0.0,1.0)$
4.    - $dy1 = \mathrm{randf}(0.0,1.0)$
5.    - $dx0 = \mathrm{randf}(0.0,1.0)$
6.    - $dx1 = \mathrm{randf}(0.0,1.0)$
7.    - $seed0 = \mathrm{rand}(0,2^{32} - 1)$
8.    - $seed1 = \mathrm{rand}(0,2^{32} - 1)$

                                    For each $i, j$ ($0 \leq i, j \lt N$), let $S_{i,j} = \mathrm{noise}(f0 \times i / N + dy0, f0 \times j / N + dx0, seed0) + 0.2 \times \mathrm{noise}(f1 \times i / N + dy1, f1 \times j / N + dx1, seed1)$.
2. Update $S_{i,j} = 1.0 / (1.0 + \mathrm{exp}(-3.0 \times (S_{i,j} - 0.25)))$. (Transformation by logistic function.)
3. Select $p = \mathrm{randf}(2.0,4.0)$. Update $S_{i,j} = \mathrm{pow}(S_{i,j},p)$.
4. Scale $S_{i,j}$ linearly to range $10$ - $5000$, inclusive.<br>
                                    I.e. let $l$ be minimum and $u$ be maximum of $S_{i,j}$ ($0 \leq i, j \lt N$), and update $S_{i,j} = \mathrm{round}((S_{i,j} - l) \times (5000 - 10) / (u - l) + 10)$.

                            

 

                            

### Generating the locations of water sources and houses

                            

1. Let $W = \mathrm{rand}(1,4)$, $K = \mathrm{rand}(1,10)$.
2. Choose the coordinates $(a_i, b_i)$ of the $W$ water sources and the coordinates $(c_i, d_i)$ of the $K$ houses independently from the $N ^ 2$ cells with a probability inversely proportional to $S_{i,j}$.
3. In case the Manhattan distance between any pairs of the $W+K$ coordinates is under $\mathrm{round}(400/(W+K))$, go back to step 2 and regenerate.

                            

### Generating $C$

                            

Given by $C = \mathrm{pow}(2,\mathrm{rand}(0,7))$.

                        
                        

You are not required to understand this.

                        

Please refer to the source code of the input generator for implementation details.

                    
                

                
                    
                        

## Tools (Input generator, visualizer, local tester, and sample code)

                        

- [Web Version](https://img.atcoder.jp/ahc018/6bada50282.html?lang=en): For displaying animated visualizations.
- [Local Version](https://img.atcoder.jp/ahc018/6bada50282.zip): Please set up a [Rust language](https://www.rust-lang.org/) build environment to use this.
                                -   - [Pre-compiled binary for Windows](https://img.atcoder.jp/ahc018/6bada50282_windows.zip): If you have troubles setting up Rust environment, use this.
- [Sample code (C++, Python)](https://img.atcoder.jp/ahc018/6bada50282_sample.zip): Sample answers. Implemented as follows:
                                -   - Performs **excavations** to build watercourses from the first **water source** to each **house** by the shortest, direct route.
-   - Uses constantly `100` as the **power** setting.
-   - Once the judge program returns `2`, prints the consumed **stamina** to stderr and exits.

                        

                            <font color="red">**Note that sharing visualization results is forbidden until the contest ends.**</font>
                        

                        

### Input format used in the tools

                        

The input file for the local tester uses the following format.

> \(
> 
> N ~ W ~ K ~ C \\
> 
> S_{0,0} ~ \cdots ~ S_{0,N-1} \\
> 
> \vdots \\
> 
> S_{N-1,0} ~ \cdots ~ S_{N-1 ,N-1} \\
> 
> a_0 ~ b_0 \\
> 
> \vdots \\
> 
> a_{W-1} ~ b_{W-1} \\
> 
> c_0 ~ d_0 \\
> 
> \vdots \\
> 
> c_{K-1} ~ d_{K-1} \)
                        

$S_{i,j}$ is the **sturdiness** value of the **bedrock** on cell $(i, j)$.

                        

                            The local tester writes outputs from your program directly to the output file.
                            Your program may output comment lines starting with `#`. The web version of the visualizer displays the comment lines with the corresponding **excavations**, which may be useful for debugging and analysis.
                            Since the judge program ignores all comment lines, you can submit a program that outputs comment lines as is.
                        

                    
                
            

            
            
                
                    

## I/O Examples

                    
                        
                            
                                Input
                                Output
                                Explanation
                            
                        
                        
                            
                                
```plain
3 1 1 128
0 0
1 1
```
                                
                                
                                
                                    Please note that this input is for explanation purposes, and thus doesn't meet all of the guarantees for input.
                                    On a $3 \times 3$ grid, there exists a **water source** on cell $(0,0)$, and a **house** on cell $(1,1)$.
                                
                            
                            
                                
                                
```plain
0 0 872
```
                                
                                
                                    An **excavation** is performed at cell $(0,0)$ with **power** $872$. Accordingly, **stamina** is consumed by $128+872 = 1000$.
                                
                            
                            
                                
```plain
0
```
                                
                                
                                
                                    This **excavation** doesn't manage to crush the **bedrock** on cell $(0,0)$.
                                    However, the **sturdiness** of the **bedrock** on cell $(0,0)$ diminishes by $872$.
                                
                            
                            
                                
                                
```plain
0 0 2
```
                                
                                
                                    An **excavation** with **power** $2$ is performed at cell $(0,0)$. Accordingly, **stamina** is consumed by $128+2 = 130$.
                                
                            
                            
                                
```plain
1
```
                                
                                
                                
                                    This **excavation** manages to crush the **bedrock** at cell $(0,0)$.
                                    Water flows into cell $(0,0)$.
                                
                            
                            
                                
                                
```plain
1 1 872
```
                                
                                
                                    An **excavation** with **power** $872$ is performed at cell $(1,1)$. Accordingly, **stamina** is consumed by $128+872 = 1000$.
                                
                            
                            
                                
```plain
1
```
                                
                                
                                
                                    The **bedrock** on cell $(1,1)$ gets crushed.
                                
                            
                            
                                
                                
```plain
1 0 872
```
                                
                                
                                    An **excavation** with **power** $872$ is performed at cell $(1,0)$. Accordingly, **stamina** is consumed by $128+872 = 1000$.
                                
                            
                            
                                
```plain
2
```
                                
                                
                                
                                    The **bedrock** on cell $(1,0)$ gets crushed.
                                    Water is now flowing into cells $(0,0)$, $(1,0)$ and $(1,1)$, and every cell with a **house** now has flowing water.
                                    As the judge program now returns `2`, please exit the program immediately.
                                    The sum of the consumed **stamina**, which turns out to be $1000+130+1000+1000 = 3130$, is used to calculate the relative score.