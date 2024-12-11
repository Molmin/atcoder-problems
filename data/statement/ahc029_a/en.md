## Problem Statement

                    

                        You are playing a business management game where the company is working on multiple **projects**.
                        In this game, you choose and consume a **policy card** from your hand each turn to advance the projects, and then refill your hand with a policy card.
                        The objective of this game is to maximize your **money** at the end of $T$ turns.
                    

                    

                        Each project is described by a pair of integer values: **remaining work** and **value**. When the remaining work becomes $0$ or less, the project is completed, and the value is added to your money.
                    

                    

                        You have $N$ policy cards in your hand, each containing a strategy for managing projects. Each turn, you select one policy card from your hand and manage the project according to its contents.
                        There are five types of policy cards:
                        

- **Regular Work card**: This card is associated with a positive integer representing **labor power**. When you choose this card, you specify one of the projects you are currently managing, and reduce the remaining work of that project by the amount of labor power.
- **Hard Work card**: This card is associated with a positive integer representing **labor power**. When you choose this card, the remaining work of each of the projects you are currently managing is reduced by the amount of labor power.
- **Cancel card**: When you choose this card, you specify one of the projects you are currently managing and abort it.
- **Restructuring card**: When you choose this card, you abort all the projects you are currently managing.
- **Investment card**: Choosing this card doubles the remaining work and value of future projects, as well as the labor power and cost(described below) of future policy cards. The projects that have already appeared and the policy cards in your hand will not be affected.
                        <font color="red">**This card can only be used up to $20$ times within a single test case.**</font>

                    

                    

### How the game is played

                    

                        At the start of the game, you are given information about the $M$ projects the company is managing and the $N$ policy cards you have. Your initial money is $0$.
                        Each turn progresses as follows:
                        

1. Choose and execute one policy card from your hand. The selected card is removed from your hand.
2. 1.    - If a project is completed, your money increases by the value of the project, and the project disappears.
2.    - If a project is aborted, the project disappears.

3. If the number of existing projects falls below $M$, new projects are provided to make the total number of projects equal to $M$.
4. You are presented with $K$ policy cards and their respective costs. You choose one card from them to add to your hand. When you do so, your money decreases by the cost of the chosen card.
5. 1.    - You cannot choose a policy card that would result in your money becoming negative due to the cost. However, it is guaranteed that you can always choose a card from the set of $K$ cards, as there exists a card with a cost of $0$ among them, as will be explained later.

                        As can be inferred from the above steps, at the beginning of each turn, you will always have $N$ policy cards in your hand, and the company will be managing $M$ projects.
                    

                    

                        Play the game skillfully and maximize your money at the end of $T$ turns.
                    

                
            
            
            
                
                    

## Scoring

                    

For each test case, the absolute score is obtained as the value of the money at the end of $T$ turns, and we compute the <font color="red">**relative score**</font> $\mathrm{round}(10^9\times \frac{\mathrm{YOUR}}{\mathrm{MAX}})$, where YOUR is your absolute score and MAX is the maximum absolute score among all competitors obtained on that test case. The score of the submission is the sum of the relative scores.

                    

The final ranking will be determined by the system test with more inputs which will be run after the contest is over.
                    In both the provisional/system test, if your submission produces illegal output or exceeds the time limit for some test cases, only the score for those test cases will be zero, and your submission will be excluded from the MAX calculation for those test cases.

                    

The system test will be performed only for <font color="red">**the last submission which received a result other than CE **</font>.
                    Be careful not to make a mistake in the final submission.

                    

### Number of test cases

                    

- Provisional test: 50
- System test: 3000
                            -   - We will publish [seeds.txt](https://img.atcoder.jp/ahc029/seeds.txt) (sha256=`aa53f4b2ae15494c08f8304459afd7523eb10b704394ad1c6a0a92fa052bbe14`) after the contest is over.

                    

### About Relative Evaluation System

                    

                        In both the provisional/system test, the standings will be calculated using only the last submission which received a result other than CE.
                        Only the last submissions are used to calculate the MAX for each test case when calculating the relative scores.
                    

                    

                        The scores shown in the standings are relative, and whenever a new submission arrives, all relative scores are recalculated.
                        On the other hand, the score for each submission shown on the submissions page is the sum of the absolute score for each test case, and the relative scores are not shown.
                        In order to know the relative score of submission other than the latest one in the current standings, you need to resubmit it.
                        If your submission produces illegal output or exceeds the time limit for some test cases, the score shown on the submissions page will be 0, but the standings show the sum of the relative scores for the test cases that were answered correctly.
                    

                    

### About execution time

                    

                        Execution time may vary slightly from run to run.
                        In addition, since system tests simultaneously perform a large number of executions, it has been observed that execution time increases by several percent compared to provisional tests.
                        For these reasons, submissions that are very close to the time limit may result in TLE in the system test.
                        Please measure the execution time in your program to terminate the process, or make sure to have enough time margin for the execution.
                    

                
            
            

            
                
                    
                        

## Input and Output

                        

                            **This problem is interactive. Read the following explanation, and communicate with the judge program accordingly.**
                        

                        

At first, problem parameters and the initial state will be provided from Standard Input in the following format.

> \(
> 
> N ~ M ~ K ~ T \\
> 
> t_0 ~ w_0 \\
> 
> \vdots \\
> 
> t_{N-1} ~ w_{N-1} \\
> 
> h_0 ~ v_0 \\
> 
> \vdots \\
> 
> h_{M-1} ~ v_{M-1} \)
                        

- On the first line, there are four integers $N,M,K,T$ separated by spaces.
- -   - $N$ represents the number of policy cards in your hand and satisfies $2 \le N \le 7$.
-   - $M$ represents the number of projects managed by the company and satisfies $2 \le M \le 8$.
-   - $K$ represents the number of policy card candidates presented for refilling the hand and satisfies $2 \le K \le 5$.
-   - $T$ represents the number of turns and satisfies $T = 1000$.

- The following $N$ lines provide information about the policy cards in the starting hand.
- -   - Each line contains space-separated two integers $t_i$ and $w_i$, representing the type and labor power of the $i$-th policy card.
-   - -   -   - When $t_i = 0$, it indicates that the card is a Regular Work card with labor power $w_i$.
-   -   - When $t_i = 1$, it indicates that the card is a Hard Work card with labor power $w_i$.
-   -   - When $t_i = 2$, it indicates that the card is a Cancel card.
-   -   - When $t_i = 3$, it indicates that the card is a Restructuring card.
-   -   - When $t_i = 4$, it indicates that the card is an Investment card.

-   - The ranges of values for $t_i, w_i (0 \leq i \lt N)$ are described in the "Input Generation" section.

- The following $M$ lines provide information about the projects at the start of the game.
- -   - Each line contains space-separated two integers $h_i$ and $v_i$, representing the remaining work and value of the $i$-th project.
-   - The ranges of values for $h_i, v_i (0 \leq i \lt M)$ are described in the "Input Generation" section.

                        

After receiving the above input, the game will progress over $T$ turns. Communicate with the judge program in the following format each turn.

                        

                            First, choose one policy card to use from your hand, and output the information of that card to the Standard Output in the following format.
                        

                        
> \(
> 
> c ~ m\)
                        

- On a single line, output two integers $c,m$ separated by a space.
- -   - $c$ represents the position of the policy card to be used from the hand.
-   - $m$ represents the position of the project on which to apply the effect of the card.
-   - $0 \leq c \lt N, 0 \leq m \lt M$ must be satisfied.
-   - If the chosen card is a Hard Work card, Restructuring card, or Investment card, $m$ must be $0$.

- Investment card can only be used up to $20$ times within a single test case.
- If the output does not satisfy the constraints, the result will be WA.
- The output must be followed by a new line, and you have to flush Standard Output. Otherwise, the submission might be judged as TLE<br>

                        

                            Next, receive the information about the status of the projects after using the card from the Standard Input.
                        

> \(          
> 
> h_0 ~ v_0 \\
> 
> \vdots \\
> 
> h_{M-1} ~ v_{M-1} \)
                        

- The input consists of $M$ lines, with each line providing the information about the projects immediately after using the previous policy card, in the same format as the initial input.
- If there are completed or aborted projects, the information about the newly generated projects will be provided at the same position as those projects.

                        

                            Next, receive the information about the current money from the Standard Input.
                        

> \(
> 
> money\)
                        

- A single integer $money$ is provided, representing the current money at this point.

                        

                            Next, receive the information about the candidate policy cards to refill the hand from the Standard Input.
                        

> \(
> 
> t_0 ~ w_0 ~ p_0 \\
> 
> \vdots \\
> 
> t_{K-1} ~ w_{K-1} ~ p_{K-1} \)
                        

- The input consists of $K$ lines, each containing three integers separated by spaces
- $t_i, w_i$ represent the information of the $i$-th candidate policy card in the same format as the initial input.
- $p_i$ represents the cost of the $i$-th policy card.
- **$t_0, w_0, p_0$ satisfy $t_0 = 0, w_0 = 2^L, p_0 = 0$.** Here, let $L$ ( $0 \leq L \leq 20$ ) be an integer representing the number of times the Investment card has been used at this point.
- The ranges of values for $t_i, w_i, p_i (1 \leq i \lt K)$ are described in the "Input Generation" section.

                        

                            Finally, output to the standard output the information about which of the $K$ candidate policy cards to add to the hand.
                        

> \(
> 
> r\)
                        

- On a single line, output an integer $r$.
- -   - This indicates selecting the $r$-th policy card from the candidate policy cards.
-   - $0 \le r \lt K$ must be satisfied.
-   - You cannot choose a card that would result in a negative money.

- The card chosen here will refill the hand in the same position as the card used at the beginning of this turn, which is the $c$-th position in the hand.
- If the output does not satisfy the constraints, the result will be WA.
- The output must be followed by a new line, and you have to flush Standard Output. Otherwise, the submission might be judged as TLE<br>

                        

                            This concludes one turn.
                        

                    
                

                
                    
                        

## Input Generation

                        
                            

- For integers $l$ and $r$ satisfying $l \leq r$, let $\mathrm{rand}(l, r)$ be a function that generates a uniformly random integer between $l$ and $r$, inclusive.
- For real numbers $l$ and $r$ satisfying $l \leq r$, let $\mathrm{rand\_double}(l, r)$ be a function that generates a uniformly random real number between $l$ and $r$, inclusive.
- Let $\mathrm{gauss}( \mu , \sigma )$ be a function that generates values from a normal distribution with mean $\mu$ and standard deviation $\sigma$.
- For real numbers $l$ and $r$ satisfying $l \leq r$, and a real number $x$, let $\mathrm{clamp}(x, l, r)$ be a function that calculates $\mathrm{max}(l, \mathrm{min}(r, x))$.

                        
                        

### Generation of $N, M, K$

                        

- $N = \mathrm{rand}(2, 7)$
- $M = \mathrm{rand}(2, 8)$
- $K = \mathrm{rand}(2, 5)$

                        

### Generation of projects

                        

- Let $L$ ( $0 \leq L \leq 20$ ) be an integer representing the number of times the Investment card has been used at this point.
- Generate a parameter $b = \mathrm{rand\_double}(2.0, 8.0)$.
- Remaining work $h$ is generated as $h = \mathrm{round}(2 ^ b) * 2^L$.
- Value $v$ is generated as $v = \mathrm{round}(2 ^ {\mathrm{clamp}(\mathrm{gauss}(b, 0.5), 0.0, 10.0)}) * 2^L$.

                        

### Generation of policy cards

                        

- For each test case, the hidden parameters $x_0, x_1, x_2, x_3, x_4$ are defined to control the generation probabilities of the card types as follows:
- -   - $x_0=\mathrm{rand}(1,20), x_1=\mathrm{rand}(1,10), x_2=\mathrm{rand}(1,10), x_3=\mathrm{rand}(1,5), x_4=\mathrm{rand}(1,3)$

- The probability of the card type $t$ being $i$ is proportional to $x_i$ $(0 \leq i \leq 4)$.
- Let $L$ ( $0 \leq L \leq 20$ ) be an integer representing the number of times the Investment card has been used at this point.
- If $t=0$ or $t = 1$, labor power $w$ is generated as $w=\mathrm{rand}(1, 50)* 2^L$. For $t$ other than $0,1$, $w$ is set to $0$.
- The cost $p$ of the policy card is determined as follows:
- -   - When $t = 0$, let $w' = w/2^L$ and $p$ is generated as $p = \mathrm{clamp}(\mathrm{round}(\mathrm{gauss}(w', w'/3)), 1, 10000) * 2^L$ .
-   - When $t = 1$, let $w' = w/2^L$ and $p$ is generated as $p = \mathrm{clamp}(\mathrm{round}(\mathrm{gauss}(w'*M, w'*M/3)), 1, 10000) * 2^L$ .
-   - When $t = 2$, $p$ is generated as $p = \mathrm{rand}(0, 10) * 2^L$ .
-   - When $t = 3$, $p$ is generated as $p = \mathrm{rand}(0, 10) * 2^L$ .
-   - When $t = 4$, $p$ is generated as $p = \mathrm{rand}(200, 1000) * 2^L$ .

                    
                

                
                    
                        

## Tools (Input generator, local tester and visualizer)

                        

- [Web version](https://img.atcoder.jp/ahc029/45e6da0b06.html?lang=en): For displaying animated visualizations.
- [Local version](https://img.atcoder.jp/ahc029/45e6da0b06.zip): You need a compilation environment of [Rust language](https://www.rust-lang.org/).
                                -   - [Pre-compiled binary for Windows](https://img.atcoder.jp/ahc029/45e6da0b06_windows.zip): If you are not familiar with the Rust language environment, please use this instead.
- [Sample code (C++, Python)](https://img.atcoder.jp/ahc029/45e6da0b06_sample.zip): Sample answers. Implemented as follows:
                                -   - When using a policy card, always use the $0$-th card. If the card is a Regular Work card or a Cancel card, it targets the $0$-th project.
-   - When selecting which policy card to add to the hand from the candidate policy cards, always choose the $0$-th policy card.
                                        -   -   - The cost of the $0$-th candidate policy card is guaranteed to be $0$, making this choice always possible regardless of the current money.

                        

                            <font color="red">**Please be aware that sharing visualization results or discussing solutions/ideas during the contest is prohibited.**</font>
                        

                        

### Specification of input/output files used by the tools

                        

Input files given to the local tester have the following format.

> \(
> 
> N ~ M ~ K ~ T \\
> 
> h_{init,0} ~ v_{init,0} \\
> 
> \vdots \\
> 
> h_{init,M-1} ~ v_{init,M-1} \\
> 
> h_{0} ~ v_{0} \\
> 
> \vdots \\
> 
> h_{T*M-1} ~ v_{T*M-1} \\
> 
> t_{init,0} ~ w_{init,0} \\
> 
> \vdots \\
> 
> t_{init,N-1} ~ w_{init,N-1} \\
> 
> t_{0,0} ~ w_{0,0} ~ p_{0,0} \\
> 
> \vdots \\
> 
> t_{0,K-1} ~ w_{0,K-1} ~ p_{0,K-1} \\
> 
> t_{1,0} ~ w_{1,0} ~ p_{1,0} \\
> 
> \vdots \\
> 
> t_{T-1,K-1} ~ w_{T-1,K-1} ~ p_{T-1,K-1} \)
                        

- $h_{init,i}, v_{init,i}$ represent the remaining work and value of the $i$-th project given at the beginning.
- $h_{i}, v_{i}$ represent the remaining work and value of the newly generated projects, and they are used sequentially from the beginning. When generating new projects, these values are multiplied by $2^L$, where $L$ is the number of times the Investment card has been used.
- $t_{init,i}, w_{init,i}$ represent the type and labor power of the $i$-th policy card given at the beginning
- $t_{i,j}, w_{i,j}, p_{i,j}$ represent the type, labor power, and cost of the $j$-th candidate policy card given in the $i$-th turn. When generating new policy card, these values are multiplied by $2^L$, where $L$ is the number of times the Investment card has been used.

                        

                            The local tester writes outputs from your program directly to the output file.
                            Your program may output comment lines starting with `#`. The web version of the visualizer displays the comment lines with the corresponding turn, which may be useful for debugging and analysis.
                            Since the judge program ignores all comment lines, you can submit a program that outputs comment lines as is.
                        

                    
                
            

            
            
                
                    

## I/O Examples

                    
                        
                            
                                Input
                                Output
                                Explanation
                            
                        
                        
                            
                                
```plain
3 2 4 3
0 29
3 0
4 0
38 113
17 46
```
                                
                                
                                
                                    Please note that this input is for explanation purposes, and thus doesn't meet all of the constraints for input.
                                    Information about the three policy cards in the initial hand and the information about two initial projects are provided.
                                
                            
                            
                                
                                
```plain
0 1
```
                                
                                
                                    The first turn begins from here.
                                    Applying the Regular Work card that was in position $0$ of the hand to the project in position $1$.
                                    The remaining work of this project becomes $-12$ $(17-29=-12)$, resulting in the project being completed.
                                    As the project is completed, the money increases to $46$.
                                
                            
                            
                                
```plain
38 113
51 82
```
                                
                                

                                
                                
                                    Receive the information about the current projects.
                                    As a result of the last action, the project in position $1$ has been completed, and a new project has appeared at that position.
                                
                            
                            
                                
```plain
46
```
                                
                                 
                                
                                    Receive the information about the current money.
                                
                            
                            
                                
```plain
0 1 0
3 0 8
1 18 22
4 0 685
```
                                
                                

                                
                                
                                    Four candidate policy cards and their costs are presented. The cost of the card at position $3$ exceeds the money, so it cannot be selected.
                                
                            
                            
                                
                                
                                
```plain
2
```
                                
                                
                                    Chose the Hard Work card at position $2$. This card will be placed in position $0$ of the hand. The current hand are as follows:
```plain
1 18
3 0
4 0
```
                                    Your money decreased to $24$ $(46-22=24)$.
                                    This concludes the turn.
                                
                            
                            
                                
                                
```plain
1 0
```
                                
                                
                                    The next turn begins from here.
                                    Using the Restructuring card that was in position $1$ of the hand.
                                    All projects are aborted, and the money remains unchanged.
                                
                            
                            
                                
```plain
49 84
140 127
```
                                
                                

                                
                                
                                    Receive the information about the current projects.
                                    In place of the aborted projects, information about the new projects is provided.
                                
                            
                            
                                
```plain
24
```
                                
                                 
                                
                                    Receive the information about the current money.
                                
                            
                            
                                
```plain
0 1 0
2 0 2
0 25 44
1 43 130
```
                                
                                

                                
                                
                                    Four candidate policy cards and their costs are presented.
                                
                            
                            
                                
                                
                                
```plain
1
```
                                
                                
                                    Chose the Cancel card at position $1$. This card will be placed in position $1$ of the hand. The current hand are as follows:
```plain
1 18
2 0
4 0
```
                                    Your money decreased to $22$ $(24-2=22)$.
                                    This concludes the turn.
                                
                            
                            
                                
                                
```plain
2 0
```
                                
                                
                                    The last turn begins from here.
                                    Using the Investment card that was in position $2$ of the hand.
                                    There is no impact on the already existing policy cards and projects, and the possession money does not increase.
                                
                            
                            
                                
```plain
49 84
140 127
```
                                
                                

                                
                                
                                    Receive the information about the current projects.
                                
                            
                            
                                
```plain
22
```
                                
                                 
                                
                                    Receive the information about the current money.
                                
                            
                            
                                
```plain
0 2 0
3 0 32
2 0 18
1 84 212
```
                                
                                

                                
                                
                                    Four candidate policy cards and their costs are presented.
                                    Due to the use of the Investment card, the parameters used for generating the labor power and cost of the presented policy cards have changed.
                                
                            
                            
                                
                                
                                
```plain
0
```
                                
                                
                                    Chose the Normal Work card at position $0$. This card will be placed in position $2$ of the hand. The current hand are as follows:
```plain
1 18
2 0
0 2
```
                                    Your current money is $22$.
                                    This concludes the turn.
                                    The money at the end of all turns, which is $22$, will be the score for this test case.