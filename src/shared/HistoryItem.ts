export type HistoryItem = {
	id: string
	ts: number
	task: string
	tokensIn: number
	tokensOut: number
	cacheWrites?: number
	cacheReads?: number
	totalCost: number

	size?: number
	shadowGitConfigWorkTree?: string
	cwdOnTaskInitialization?: string
	conversationHistoryDeletedRange?: [number, number]
	isFavorited?: boolean
	// New fields for parent-child relationship
	parentId?: string
	childTaskIds?: string[]
	status?: "pending" | "running" | "paused" | "completed" | "failed"
	activeChildTaskId?: string
	// 新增：存储待执行的子任务信息
	pendingChildTasks?: Array<{
		id: string
		prompt: string
		files?: string[]
		createdAt: number
	}>
}
